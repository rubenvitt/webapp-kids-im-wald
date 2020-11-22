import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePageProperties} from "../hooks/page-properties";
import {useEffect} from "react/cjs/react.production.min";
import {useRouter} from "next/router";
import {publicRoutes} from "../routes";

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
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatπat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                </p>
            </div>

            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12'}>
                {
                    [
                        {img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80', title: 'Kindergeburtstag'},
                        {img: 'https://images.unsplash.com/photo-1501276098931-5d481df52e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', title: 'Schule'},
                        {img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80', title: 'Waldbaden'},
                    ]
                        .map((value, index) => {
                            return <button
                                onClick={() => console.log('Clicked ' + index)}
                                className={'col-span-1 shadow rounded-lg m-2 text-center bg-coolGray-50 hover:bg-coolGray-100'}>
                                <div>
                                    <img className={'rounded-t-lg w-full object-cover h-48'} src={value.img}
                                         alt={'Bild x'}/>
                                </div>
                                <div className={'p-3'}>
                                    <div className={'text-green-600 font-semibold'}>
                                        {value.title}
                                    </div>
                                    <div className={'text-left text-gray-600 border-t border-gray-200 mt-1.5 pt-1.5'}>
                                        Accusantium perferendis quis voluptates odit soluta excepturi est. At quibusdam quo voluptates possimus eius atque. Amet quia rerum enim.
                                        {index}
                                    </div>
                                </div>
                            </button>
                        })
                }
            </div>
        </>
    )
}
