'use client';
import Image from 'next/image';
import image from '../../assets/img/profile.jpeg';
import Link from 'next/link';
import React from 'react';
import { useEmailAdress } from '../../hooks/email';

export function FeaturesIntroductory() {
    const mail = useEmailAdress();
    return (
        <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-600">
                Zertifizierte Waldpädagogin, Kursleiterin Waldbaden & Diplom-Sozialpädagogin
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Beate Vitt</p>
            <p className="mt-2">
                <Image
                    className="inline-block rounded-2xl hover:rounded-3xl transition-all duration-500"
                    src={image}
                    alt=""
                />
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                ich lebe in Salzgitter Bad.
                <p>
                    In meiner Arbeit mit Kindern konnte ich feststellen, wie <strong>Neugier und Wissensdurst</strong>{' '}
                    schon die Kleinsten begeistert. Gemeinsam mit der Familie im Wald zu spielen, Abenteuer zu erleben
                    und dabei eine <strong>Naturverbindung</strong> zu wecken, ist mein Ziel.
                </p>
                <p>
                    Schreiben Sie mir gerne <Link href={mail()}>eine Anfrage</Link>. Auch{' '}
                    <strong>Schulklassen oder Kindergärten</strong> erleben auf Wunsch eine tolle Zeit im Lernort Wald.
                </p>
            </p>
        </div>
    );
}
