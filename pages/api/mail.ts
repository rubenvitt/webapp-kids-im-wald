'use server';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ServerClient } from 'postmark';
import { requireEnvironmentVariable } from '../../helper/environment-variables';
import { LinkTrackingOptions } from 'postmark/dist/client/models';
import moment from 'moment';

function validate(name: any, email: any, message: any, phone: any, subject: any) {
    if (!name || !email || !message || !subject) {
        throw new Error('Missing required parameter');
    }
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const now = moment().format('DD.MM.YYYY HH:mm:ss');

    console.log('Received mail request', req.body);

    try {
        validate(name, email, message, phone, subject);
    } catch (e) {
        return res.status(400).json({ error: (e as Error).message });
    }

    // do not send emails in development
    if (process.env.NODE_ENV !== 'development') {
        await new ServerClient(requireEnvironmentVariable('POSTMARK_API_KEY', '')).sendEmail({
            From: requireEnvironmentVariable('POSTMARK_SENDER', ''),
            To: requireEnvironmentVariable('NEXT_PUBLIC_EMAIL_ADDRESS', 'test@local'),
            ReplyTo: req.body.email,
            Subject: '[Kids im Wald]: Neue Kontaktanfrage',
            TextBody: `Name: ${name} (${email})\nTelefonnummer: ${phone}\nBetreff: ${subject}\nNachricht: ${message}\n\nAbgesendet: ${now}`,
            HtmlBody: `<p><b>Name:</b> ${name} (${email})</p><p><b>Telefonnummer:</b> ${phone}</p><p><b>Betreff:</b> ${subject}</p><p><b>Nachricht:</b> ${message}</p><p><b>Abgesendet:</b> ${now}</p>`,
            TrackLinks: LinkTrackingOptions.None,
            TrackOpens: false,
        });
    }
    res.status(200).json({ success: true });
};

export default handler;
