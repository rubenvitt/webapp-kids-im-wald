import React from 'react';
import { AppTemplate } from '../components/templates/AppTemplate';
import { Hero } from '../components/organisms/Hero';
import { Features } from '../components/organisms/Features';
import Kontakt from '../components/organisms/Kontakt';

export default function Page() {
    return (
        <AppTemplate>
            <Hero />
            <Features />
            <Kontakt />
        </AppTemplate>
    );
}
