import React from 'react';
import { Angebot } from '../../../components/organisms/Angebot';
import image from '../../../assets/img/fluss.png';
import Infobox from '../../../components/atoms/Infobox';

export default function KindergeburtstagePage() {
    return (
        <Angebot
            title="Kindergeburtstage"
            image={{
                src: image,
                alt: 'Kindergeburtstag im Wald',
            }}
        >
            <p>
                Ein Kindergeburtstag kann im Wald ein besonderes Erlebnis sein. Sie weisen bei der Einladung die anderen
                Eltern auf waldgerechte Kleidung hin und packen ein kleines Picknick ein. Manchmal ist auch Grillen an
                einer der Feuerstellen möglich. Das Thema besprechen wir vorher. Ideen sind
            </p>
            <ul role="list">
                <li>Waldrallye mit Schatzsuche</li>
                <li>Abenteuer für kleine Waldforscher</li>
                <li>Märchenwanderung mit fantastischen Wesen</li>
                <li>Robin Hood Abenteuer</li>
                <li>Kräuterfee und Märchentee</li>
                <li>Survival – erstes Wildniswissen</li>
                <li>Käferjagd und Schneckentempo</li>
                <li>Pilze – Giftzwerge oder Helfer?</li>
                <li>Klimaretter – Unsichtbares sichtbar machen – eigene Handlungsfelder entdecken</li>
            </ul>
            <Infobox>Die Dauer der Waldführung ist von 1,5 h bis 3 h möglich.</Infobox>
        </Angebot>
    );
}
