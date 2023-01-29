import { AppLogo } from './AppLogo';
import React from 'react';
import { MailLink } from './MailLink';

type NavbarItem = {
    name: string;
    href: string;
};

export type NavbarProps = {
    items: NavbarItem[];
};

export function Navbar({ items }: NavbarProps) {
    return (
        <header className="bg-primary-700">
            <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
                <div className="flex flex-col md:flex-row w-full items-center justify-between py-6 lg:border-none">
                    <div className="flex items-center">
                        <AppLogo clickable={true} />
                        <div className="ml-10 hidden space-x-8 lg:block">
                            {items.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-white hover:text-primary-50"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="space-x-4 flex flex-row items-center">
                        <MailLink />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
                    {items.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-white hover:text-primary-50"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
