'use client';
import React, { useState } from 'react';
import { MobileMenu } from '../molecules/MobileMenu';
import { Navigation } from '../molecules/Navigation';
import { HeroAdditional } from '../atoms/HeroAdditional';
import { HeroTitle } from '../atoms/HeroTitle';
import { HeroText } from '../atoms/HeroText';
import { HeroButtons } from '../atoms/HeroButtons';

const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Infos', href: '#infos' },
    { name: 'Angebote', href: '#angebote' },
    { name: 'Kontakt', href: '/kontakt' },
];

export function HeroContent() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="px-6 lg:px-8">
            <Navigation navigationItems={navigationItems} setMobileMenuOpen={setMobileMenuOpen} />
            <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} navigationItems={navigationItems} />
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <HeroAdditional />
                <div className="text-center">
                    <HeroTitle />
                    <HeroText />
                    <HeroButtons />
                </div>
            </div>
        </div>
    );
}
