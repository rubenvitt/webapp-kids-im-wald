export const emailAddress = ({ asLink = true }: { asLink?: boolean } = { asLink: true }) => {
    return (asLink ? 'mailto:' : '') + (process.env.NEXT_PUBLIC_EMAIL_ADRESS ?? 'test@local');
};
