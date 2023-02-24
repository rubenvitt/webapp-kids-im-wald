import Image from 'next/image';
import harzklub from '../../assets/img/partner/harzklub-sz.png';
import React from 'react';

export function HarzKlub() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="m-4 block">
                <a
                    href="https://harzklubzweigvereinsalzgitter.de/"
                    className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0 block"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image src={harzklub} alt="Harzklub Salzgitter" width={200} height={100} />
                </a>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Im Harzklub Zweigverein Salzgitter bin ich als Wanderführerin aktiv. Kommt doch einmal mit! Es gibt viel
                in und um Salzgitter zu entdecken.
            </p>
        </div>
    );
}
