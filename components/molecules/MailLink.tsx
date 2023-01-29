import { LetterIcon } from '../../assets/svg';
import Link from 'next/link';
import React from 'react';
import { useEmailAdress } from '../../hooks/email';

export function MailLink() {
    const mail = useEmailAdress();
    return (
        <Link href={mail()} className="text-sm font-semibold leading-6 text-white hover:text-primary-100">
            <LetterIcon className="inline mr-1 h-5 w-5" aria-hidden="true" /> Email schreiben
        </Link>
    );
}
