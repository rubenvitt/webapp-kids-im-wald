import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePageProperties} from "../hooks/page-properties";
import {useEffect} from "react/cjs/react.production.min";
import {useRouter} from "next/router";
import {publicRoutes} from "../routes";
import {route} from "next/dist/next-server/server/router";

export default function Home() {
    return (
        <>
            <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                    <span className="block xl:inline">Waldgeburtstag</span>
                    <span
                        className="block text-green-600 xl:inline">{' '}in Salzgitter und Umgebung</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Ob Waldführung für Schulklassen, ein Waldgeburtstag für Kinder oder Waldbaden für Sie und Ihre Freunde,
                    informieren Sie sich auf meiner Seite und fragen Sie noch heute ein tollen Erlebnis an.
                </p>
            </div>

            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12'}>
                {
                    [
                        {
                            img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
                            title: 'Kindergeburtstag',
                            page: 'geburtstag',
                            description: 'Wilde Kinder erforschen mit Spiel und Abenteuer den Wald, auch in Ihrer Nähe möglich. Eine 1,5  bis 2 stündige Waldführung kostet 90,- €. Anschließend oder vorher kann ein Picknick selbst organisiert werden, eine Feuerstelle ist manchmal vorhanden. '
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1501276098931-5d481df52e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                            title: 'Schule',
                            page: 'schule',
                            description: 'Mit der Klasse Wald erleben – Für Schulklassen ist eine Waldführung ein spannendes und teambildendes Erlebnis.'
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
                            title: 'Waldbaden',
                            page: 'waldbaden',
                            description: 'Waldbaden ist die Kunst, sich mit allen Sinnen mit der Natur zu verbinden'
                        },
                    ]
                        .map((value, index) => {
                            return <Link href={'/angebote/' + value.page}>
                                <a
                                    className={'col-span-1 shadow rounded-lg m-2 text-center bg-coolGray-50 hover:bg-coolGray-100'}>
                                    <div>
                                        <img className={'rounded-t-lg w-full object-cover h-48'} src={value.img}
                                             alt={'Bild x'}/>
                                    </div>
                                    <div className={'p-3'}>
                                        <div className={'text-green-600 font-semibold'}>
                                            {value.title}
                                        </div>
                                        <div
                                            className={'text-left text-gray-600 border-t border-gray-200 mt-1.5 pt-1.5'}>
                                            {
                                                value.description ?? ''
                                            }
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        })
                }
            </div>
        </>
    )
}
