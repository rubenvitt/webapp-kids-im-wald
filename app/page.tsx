import React from 'react';
import { AppTemplate } from '../components/templates/AppTemplate';
import { Hero } from '../components/organisms/Hero';
import { Features } from '../components/organisms/Features';
import Kontakt from '../components/organisms/Kontakt';
import { Cloud } from '../components/organisms/Cloud';
import { Footer } from '../components/organisms/Footer';

export default function Page() {
    return (
        <AppTemplate>
            <Hero />
            <Features />
            <Kontakt />
            <Cloud />
            <Footer />
        </AppTemplate>
    );
}
