import React from 'react';
import { Angebot } from '../../../components/organisms/Angebot';
import image from '../../../assets/img/fluss.png';

export default function KindergeburtstagePage() {
    return (
        <Angebot
            title="Andere Gruppen"
            image={{
                src: image,
                alt: 'Andere Gruppen im Wald',
            }}
        >
            <p>
                Ich habe Erfahrungen mit Betriebsausflügen, Baumwipfelpfad Bad Harzburg, Hort, Seniorenwanderung,
                Fahrradtouren. Bitte einfach nachfragen
            </p>
        </Angebot>
    );
}
