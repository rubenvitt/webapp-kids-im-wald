import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ServerClient } from 'postmark';
import { requireEnvironmentVariable } from '../../helper/environment-variables';
import { emailAddress } from '../../variables';
import { LinkTrackingOptions } from 'postmark/dist/client/models';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    await new ServerClient(requireEnvironmentVariable('POSTMARK_API_KEY', '')).sendEmail({
        From: requireEnvironmentVariable('POSTMARK_SENDER', ''),
        Subject: 'New message from your website',
        To: emailAddress({ asLink: false }),
        TextBody: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        HtmlBody: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.message}</p>`,
        TrackLinks: LinkTrackingOptions.None,
        TrackOpens: false,
        ReplyTo: req.body.email,
    });
    res.status(302).redirect('/#contact?success=true');
};

export default handler;
