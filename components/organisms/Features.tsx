import React from 'react';
import { FeaturesIntroductory } from '../molecules/FeaturesIntroductory';
import { Feature } from '../../types/feature';
import {
    ErsteHilfeKofferIcon,
    FeuchtigkeitsmesserIcon,
    KaeferIcon,
    MaerchenIcon,
    PfeilIcon,
    PilzIcon,
    SchatztruheIcon,
    TeeIcon,
    WaldIcon,
} from '../../assets/svg';

const features: Feature[] = [
    { name: 'Kindergeburtstage im Wald mit Schatzsuche', icon: SchatztruheIcon },
    { name: 'Märchenwanderung mit Spiel und spannenden Entdeckungen', icon: MaerchenIcon },
    { name: 'Auf den Spuren von Robin Hood – Waldabenteuer', icon: PfeilIcon },
    { name: 'Kräuterfee und Märchentee – Heilpflanzen zum Kennenlernen', icon: TeeIcon },
    { name: 'Survival Wissen – Erste Outdoor Erfahrungen', icon: ErsteHilfeKofferIcon },
    { name: 'Waldbaden mit Kindern, Eltern und Großeltern', icon: WaldIcon },
    { name: 'Käferjagd und Schneckentempo – Bodentierchen auf der Spur', icon: KaeferIcon },
    { name: 'Pilze – Giftzwerge oder Helferfreunde?', icon: PilzIcon },
    {
        name: 'Klimaretter – Unsichtbares sichtbar machen und eigene Handlungsfelder entdecken',
        icon: FeuchtigkeitsmesserIcon,
    },
];

function FeatureList({ features }: { features: Feature[] }) {
    return (
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
                <div key={feature.name}>
                    <dt className="text-base leading-7 text-gray-900 border p-4 rounded border-primary-800 shadow-lg">
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <p className="inline-block">{feature.name}</p>
                    </dt>
                </div>
            ))}
        </dl>
    );
}

export function Features() {
    return (
        <div id="infos" className="bg-white pb-24 pt-12 sm:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <FeaturesIntroductory />
            </div>
            <div id="angebote" className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <FeatureList features={features} />
            </div>
        </div>
    );
}
