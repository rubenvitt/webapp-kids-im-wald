import { NextApiHandler } from 'next';
import { requireEnvironmentVariable } from '../../helper/environment-variables';

const handler: NextApiHandler = (req, res) => {
    return res.status(200).json({
        mail: requireEnvironmentVariable('NEXT_PUBLIC_EMAIL_ADDRESS', 'test@local'),
    });
};

export default handler;
