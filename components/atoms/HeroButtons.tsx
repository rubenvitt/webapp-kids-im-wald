import React from 'react';

export function HeroButtons() {
    return (
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
                href="/#contact"
                className="rounded-md bg-primary-700 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
            >
                Jetzt buchen
            </a>
            <a href="/infos" className="text-base font-semibold leading-7 text-white">
                Weitere Informationen <span aria-hidden="true">→</span>
            </a>
        </div>
    );
}
