import { LetterIcon } from '../../assets/svg';
import React from 'react';
import { useEmailAdress } from '../../hooks/email';

export function MailLink() {
    const mail = useEmailAdress();
    return (
        <a href={mail()} className="text-sm font-semibold leading-6">
            <LetterIcon className="inline mr-1 h-5 w-5" aria-hidden="true" /> Email schreiben
        </a>
    );
}
