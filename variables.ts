import { requireEnvironmentVariable } from './helper/environment-variables';

export const emailAddress = ({ asLink = true }: { asLink?: boolean } = { asLink: true }) => {
    return (asLink ? 'mailto:' : '') + requireEnvironmentVariable('NEXT_PUBLIC_EMAIL_ADRESS', 'test@local');
};
