import { Breadcrumbs } from '../molecules/Breadcrumbs';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Props extends React.PropsWithChildren {
    title: string;
    image: {
        src: StaticImageData;
        alt: string;
    };
}

export function Angebot({ title, image, children }: Props) {
    return (
        <div className="overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
                <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
                <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                    <div>
                        <Breadcrumbs
                            pages={[
                                { name: 'Angebote', href: '/#angebote' },
                                { name: title, href: '#' },
                            ]}
                        />
                        <h1 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            {title}
                        </h1>
                    </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:col-start-2 lg:row-start-1">
                        <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                            <figure>
                                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                    <Image
                                        className="rounded-lg object-cover object-center shadow-lg"
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                </div>
                                <figcaption className="mt-3 flex text-sm text-gray-500">
                                    <span className="ml-2">{image.alt}</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="prose prose-primary mx-auto text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
