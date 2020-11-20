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
                    <span className="block xl:inline">Waldpädagogik</span>
                    <span className="block text-green-600 xl:inline">{' '}in Salzgitter und Umgebung</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                        <a href="#"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            Get started
                        </a>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a href="#"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                            Live demo
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
