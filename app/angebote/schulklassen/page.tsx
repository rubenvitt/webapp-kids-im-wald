import React from 'react';
import { Angebot } from '../../../components/organisms/Angebot';
import image from '../../../assets/img/fluss.png';
import Infobox from '../../../components/atoms/Infobox';

export default function SchulklassenPage() {
    return (
        <Angebot
            title="Schulklassen"
            image={{
                src: image,
                alt: 'Schulklassen im Wald',
            }}
        >
            <p>
                In Kooperation mit dem Waldforum Riddagshausen finden in Salzgitter Klassenprojekte im Lernort Wald
                kostenlos statt. Die Bildungsangebote werden vorher abgesprochen. Beispiele sind Teambildung zur
                Klassenfindung, Erlebnistage, biotische und abiotische Faktoren, Frühblüher, Bäume und Pflanzenökologie,
                Tiere, Boden und nach Absprache alles, was in Ihrer Klasse Thema ist.
            </p>
            <Infobox>
                Die Waldführung dauert 3-4 Stunden, ein Picknick und Pause sind Bestandteil der Führungen.
            </Infobox>
        </Angebot>
    );
}
