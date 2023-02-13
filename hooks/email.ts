'use client';
import useSwr from 'swr';

export function useEmailAdress() {
    const { data, isLoading } = useSwr('/api/config', (url) => fetch(url).then((r) => r.json()));
    return isLoading
        ? () => ''
        : ({ asLink = true }: { asLink?: boolean } = { asLink: true }) => (asLink ? 'mailto:' : '') + data.mail;
}
