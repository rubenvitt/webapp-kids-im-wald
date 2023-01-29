'use client';
import { LetterIcon } from '../../assets/svg';
import Link from 'next/link';
import React from 'react';
import { emailAddress } from '../../variables';

export function MailLink() {
    return (
        <Link href={emailAddress()} className="text-sm font-semibold leading-6 text-white hover:text-primary-100">
            <LetterIcon className="inline mr-1 h-5 w-5" aria-hidden="true" /> Kontakt
        </Link>
    );
}
