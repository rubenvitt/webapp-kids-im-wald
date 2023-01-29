import { LetterIcon } from '../../assets/svg';
import Link from 'next/link';
import React from 'react';

export function MailLink() {
    return (
        <Link href={'#contact'} className="text-sm font-semibold leading-6 text-white hover:text-primary-100">
            <LetterIcon className="inline mr-1 h-5 w-5" aria-hidden="true" /> Kontakt
        </Link>
    );
}
