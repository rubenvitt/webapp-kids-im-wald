import React from 'react';

export function HeroAdditional() {
    return (
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Wie unterscheide ich Steinpilze von Fliegenpilzen?{' '}
                <a href="#" className="font-semibold text-white">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Mehr dazu <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    );
}
