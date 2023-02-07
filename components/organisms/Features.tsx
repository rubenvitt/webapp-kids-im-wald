import React from 'react';
import { FeaturesIntroductory } from '../molecules/FeaturesIntroductory';
import { Feature } from '../../types/feature';
import { MaerchenIcon, PfeilIcon, SchatztruheIcon, TeeIcon } from '../../assets/svg';

const features: Feature[] = [
    { name: 'Kindergeburtstage', icon: SchatztruheIcon },
    { name: 'Schulklassen', icon: MaerchenIcon },
    { name: 'KiTas', icon: PfeilIcon },
    { name: 'Andere Gruppen', icon: TeeIcon },
];

function FeatureList({ features }: { features: Feature[] }) {
    return (
        <dl className="grid grid-cols-1 gap-x-6 gap-y-5 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:gap-x-8 lg:gap-y-5">
            {features.map((feature) => (
                <div
                    key={feature.name}
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                    <div className="flex-shrink-0">
                        <feature.icon className="h-10 w-10 rounded-full" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">{feature.name}</p>
                        </a>
                    </div>
                </div>
            ))}
        </dl>
    );
}

export function Features() {
    return (
        <div id="infos" className="bg-white pb-24 pt-12 sm:pb-32 max-w-3xl mx-auto px-6 lg:px-8">
            <FeaturesIntroductory />
            <div id="angebote" className="mt-16 sm:mt-20 md:mt-24 flex flex-col gap-2 items-stretch">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meine Angebote</h2>
                <FeatureList features={features} />
            </div>
        </div>
    );
}
