'use client';
import React from 'react';
import { HeroTitle } from '../atoms/HeroTitle';
import { HeroText } from '../atoms/HeroText';

export function HeroContent() {
    return (
        <div>
            <div className="mx-6 lg:mx-8">
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
