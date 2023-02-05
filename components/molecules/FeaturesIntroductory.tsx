'use client';
import Image from 'next/image';
import image from '../../assets/img/profile.jpg';
import React from 'react';
import { useEmailAdress } from '../../hooks/email';
import { LetterIcon, PhoneIcon } from '../../assets/svg';

export function FeaturesIntroductory() {
    const mail = useEmailAdress();
    return (
        <div className="mx-auto max-w-2xl">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-600">
                <p>Zertifizierte Waldpädagogin, Kursleiterin Waldbaden &</p>
                <p>Diplom-Sozialpädagogin</p>
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Beate Vitt</p>
            <p className="mt-2">
                <Image
                    className="inline-block rounded-2xl hover:rounded-3xl transition-all duration-500"
                    src={image}
                    alt=""
                />
            </p>
            <h3 className="font-bold">Kontakt</h3>
            <p className="text-gray-500">
                <PhoneIcon className="inline-block w-6 h-6 mr-2" />
                <span className="sr-only">Telefonnummer:</span>
                <a href="tel:+491755236302">0175 5236302</a>
            </p>
            <p className="text-gray-500">
                <LetterIcon className="inline-block w-6 h-6 mr-2" />
                <span className="sr-only">E-Mail-Adresse:</span>
                <a href={mail({ asLink: true })}>{mail({ asLink: false })}</a>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Wohnhaft bin ich in Salzgitter Bad. Während meiner langjährigen Arbeit mit Kindern durfte ich erleben,
                wie <strong>Neugier</strong> und <strong>Wissensdurst</strong> schon die Kleinsten begeistert. Eine{' '}
                <strong>Zeit in der Natur</strong> zu verbringen. Gelassenheit und Auszeit vom Alltag sind wohltuend für
                Körper und Psyche. Auch Kindern, die als Freizeitbeschäftigung am liebsten gamen, schadet der{' '}
                <strong>Aufenthalt im Wald</strong> nicht, im Gegenteil! Gerade von ihnen höre ich oft{' '}
                <strong>Begeisterung</strong> bei der abschließenden Reflexion.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Gemeinsam mit der Familie und Freunden im Wald zu spielen, dabei Entdeckungen zu Tieren und Pflanzen in
                ihrem <strong>natürlichen Lebensraum</strong> zu machen, mit <strong>Erlebnisspielen</strong> das Team
                zu stärken und eine <strong>Naturverbindung</strong> zu schaffen, sind meine Ziele. Nur, was wir zu
                schätzen gelernt haben, können wir auch schützen.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Die <strong>Waldführungen</strong> sind jahreszeitlich und der Umgebung angepasst. Eigene Vorschläge und
                Wünsche können Berücksichtigung finden. So können wir im Frühjahr die ersten <strong>Frühblüher</strong>{' '}
                entdecken, im Sommer den
                <strong>Tierspuren</strong> folgen und mit <strong>Lupendosen</strong> das Leben der Krabbeltierchen
                erforschen. Heilpflanzen erkunden wir bei einer <strong>Wildpflanzenexkursion</strong>. Das geheime
                Reich der Pilze lässt sich spätestens im Herbst entdecken.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Als <strong>Kursleiterin für Waldbaden – Shinrin Yoku</strong>, wie es auf japanisch heißt, begleite ich
                Sie auf einem ruhigen, langsamen <strong>Weg zu innerer Gelassenheit</strong>. Waldbaden dauert etwa
                drei Stunden, wir gehen dabei in einem <strong>Tempo von weniger als 2 km</strong> in einer Stunde und
                nehmen dabei die Umgebung bewusst wahr. Dies hat nachweislich einen positiven Effekt auf die{' '}
                <strong>Gesundheit</strong>. Das Zusammenwirken der Terpene in den Bäumen, der Anionen in der Luft und
                dem Mikrobiom des Waldbodens fördert die Abwehrkräfte und stärkt das Immunsystem. Stresshormone werden
                abgebaut.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Lebhaft und aufregend geht es zu, wenn Aktionen mit Kindern anstehen: <strong>Kindergeburtstage</strong>
                , Projekte mit<strong>Schulklassen</strong> im Lernort Wald, <strong>KiTa</strong> Gruppen und
                <strong>Familienzentren</strong> können in Salzgitter kostenlos stattfinden. Dies ist möglich durch die
                Förderung der Stadt Salzgitter in Kooperation mit dem Ministerium für Familien, Senioren, Frauen und
                Jugend.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Rufen Sie mich gerne an, ich rufe auf jeden Fall zurück, falls es einmal nicht passt: mobil{' '}
                <span className="sr-only">Telefonnummer:</span>
                <a href="tel:+491755236302">0175 5236302</a>.
            </p>
        </div>
    );
}
