'use client';
import { Navigation } from '../molecules/Navigation';
import React, { useState } from 'react';
import { MobileMenu } from '../molecules/MobileMenu';

const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Infos', href: '#infos' },
    { name: 'Angebote', href: '#angebote' },
    { name: 'Kontakt', href: '#contact' },
];

export function AppNavigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <div className="px-6 lg:px-8 pb-4 bg-yellow-500">
                <Navigation navigationItems={navigationItems} setMobileMenuOpen={setMobileMenuOpen} />
            </div>
            <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} navigationItems={navigationItems} />
        </>
    );
}
