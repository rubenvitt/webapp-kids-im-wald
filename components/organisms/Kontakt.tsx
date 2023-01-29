import React from 'react';
import { KontaktInformationen } from '../molecules/KontaktInformationen';
import { KontaktFormular } from '../molecules/KontaktFormular';

export default function Kontakt() {
    return (
        <div id="contact" className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
                <div className="relative bg-white shadow-xl">
                    <h2 className="sr-only">Kontaktieren Sie mich</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <KontaktInformationen />
                        <KontaktFormular />
                    </div>
                </div>
            </div>
        </div>
    );
}
