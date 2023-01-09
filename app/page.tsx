import React from 'react';
import { Headline } from '../components/atoms/Headline';

function angebot(title: string) {
    return { title };
}

const angebote = [
    angebot('Kindergeburtstage im Wald mit Schatzsuche'),
    angebot('Märchenwanderung mit Spiel und spannenden Entdeckungen'),
    angebot('Auf den Spuren von Robin Hood – Waldabenteuer'),
    angebot('Kräuterfee und Märchentee – Heilpflanzen zum Kennenlernen'),
    angebot('Survival Wissen – Erste Outdoor Erfahrungen'),
    angebot('Waldbaden mit Kindern, Eltern und Großeltern'),
    angebot('Käferjagd und Schneckentempo – Bodentierchen auf der Spur'),
    angebot('Pilze – Giftzwerge oder Helferfreunde?'),
    angebot('Klimaretter – Unsichtbares sichtbar machen und eigene Handlungsfelder entdecken'),
];

export default function Home() {
    return (
        <>
            <Headline>Test</Headline>
            <div>
                <p>
                    Wälder sind ursprüngliche Natur auch in ihrer jetzigen, gefährdeten Form. Immer noch bergen sie
                    spannende Geheimnisse. Zugleich sind sie von Menschen gemachte Kulturlandschaften, bereichern unser
                    Leben mit Schönheit und Naturerfahrung.
                </p>

                <p>
                    Mein Name ist Beate Vitt, ich lebe in Salzgitter Bad In meiner Arbeit mit Kindern konnte ich
                    feststellen, wie Neugier und Wissensdurst schon die Kleinsten begeistert. Gemeinsam mit der Familie
                    im Wald zu spielen, Abenteuer zu erleben und dabei eine Naturverbindung zu wecken, ist mein Ziel.
                    Schreiben Sie mir gerne eine Anfrage. Auch Schulklassen oder Kindergärten erleben auf Wunsch eine
                    tolle Zeit im Lernort Wald.
                </p>

                <section className="container flex items-center justify-center h-screen m-auto mb-6 bg-fixed bg-center bg-cover text-bg-img">
                    <div className="p-5 text-2xl text-white bg-primary-800 bg-opacity-70 rounded-xl">
                        <ul>
                            {angebote.map((angebot, i) => (
                                <li key={i}>- {angebot.title}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}
