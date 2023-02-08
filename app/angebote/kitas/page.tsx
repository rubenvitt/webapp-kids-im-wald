import React from 'react';
import { Angebot } from '../../../components/organisms/Angebot';
import image from '../../../assets/img/fluss.png';
import Infobox from '../../../components/atoms/Infobox';

export default function SchulklassenPage() {
    return (
        <Angebot
            title="KiTas"
            image={{
                src: image,
                alt: 'KiTas im Wald',
            }}
        >
            <p>
                In der KiTa gibt es oft schon eine tolle waldpädagogische Arbeit mit vielen Projekten im Wald und auf
                naturnahem Außengelände. Dennoch kann die Zusammenarbeit mit mir als außenstehender Waldpädagogin
                befruchtend sein. Neue Impulse und Ideen, das Besondere einer gemeinsamen Aktion sind Gründe, mich dazu
                zu holen. Tierpräparate kann ich aus dem Waldforum Riddagshausen ausleihen und mitbringen.
            </p>
            <Infobox>In Salzgitter ist das Angebot mit Natur erleben für Familien kostenlos möglich.</Infobox>
        </Angebot>
    );
}
