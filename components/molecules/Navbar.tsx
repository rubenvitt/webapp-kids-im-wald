import { AppLogo } from './AppLogo';
import React from 'react';

type NavbarItem = {
    name: string;
    href: string;
};

export type NavbarProps = {
    items: NavbarItem[];
};

export function Navbar({ items }: NavbarProps) {
    return (
        <header className="bg-primary-600">
            <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
                <div className="flex w-full items-center justify-between border-b border-primary-500 py-6 lg:border-none">
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
                    <div className="ml-10 space-x-4">
                        <a
                            href="#"
                            className="inline-block rounded-md border border-transparent bg-primary-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                        >
                            Sign in
                        </a>
                        <a
                            href="#"
                            className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-primary-600 hover:bg-primary-50"
                        >
                            Sign up
                        </a>
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
