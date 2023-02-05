import React from 'react';
import image from '../../assets/img/trees.png';
import { HeroBackgroundGradientBottom, HeroBackgroundGradientTop } from '../atoms/HeroBackgroundGradient';
import { HeroBackground } from '../atoms/HeroBackground';
import { HeroContent } from './HeroContent';
import { Citation } from '../molecules/Citation';

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-green-800">
            <HeroBackground img={image} />
            <HeroBackgroundGradientTop />

            <HeroContent />
            <Citation />

            <HeroBackgroundGradientBottom />
        </div>
    );
}
