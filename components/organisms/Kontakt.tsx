import React from 'react';
import { KontaktInformationen } from '../molecules/KontaktInformationen';

export default function Kontakt() {
    return (
        <div id="contact" className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
                <div className="relative bg-white shadow-xl">
                    <KontaktInformationen />
                </div>
            </div>
        </div>
    );
}
