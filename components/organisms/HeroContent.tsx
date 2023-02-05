'use client';
import React, { useState } from 'react';
import { MobileMenu } from '../molecules/MobileMenu';
import { Navigation } from '../molecules/Navigation';
import { HeroTitle } from '../atoms/HeroTitle';
import { HeroText } from '../atoms/HeroText';

const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Infos', href: '#infos' },
    { name: 'Angebote', href: '#angebote' },
    { name: 'Kontakt', href: '#contact' },
];

export function HeroContent() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <div className="px-6 lg:px-8 pb-4 bg-yellow-500">
                <Navigation navigationItems={navigationItems} setMobileMenuOpen={setMobileMenuOpen} />
            </div>
            <div className="mx-6 lg:mx-8">
                <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} navigationItems={navigationItems} />
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <HeroTitle />
                        <HeroText />
                    </div>
                </div>
            </div>
        </div>
    );
}
