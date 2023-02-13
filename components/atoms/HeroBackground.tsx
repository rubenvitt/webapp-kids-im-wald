import Image from 'next/image';
import React from 'react';

export function HeroBackground({ img }: { img: any }) {
    return <Image className="absolute inset-0 -z-10 h-full w-full object-cover" src={img} alt={'test'} />;
}
