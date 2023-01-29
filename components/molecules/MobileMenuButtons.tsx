'use client';
import Link from 'next/link';
import { LetterIcon } from '../../assets/svg';
import React from 'react';
import { NavigationItem } from '../../types/navigation';
import { useEmailAdress } from '../../hooks/email';

export function MobileMenuButtons(props: { navigation: NavigationItem[] }) {
    const mail = useEmailAdress();
    return (
        <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                    {props.navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="py-6">
                    <Link
                        href={mail()}
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-gray-400/10"
                    >
                        <LetterIcon className="inline mr-1 h-7 w-7" aria-hidden="true" /> Kontakt
                    </Link>
                </div>
            </div>
        </div>
    );
}