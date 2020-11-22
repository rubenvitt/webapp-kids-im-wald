import Image from "next/image";
import React from "react";
import {publicRoutes} from "../routes";
import {useRouter} from "next/router";
import Link from 'next/link';
import create from "zustand";

const useMobileState = create((set, get) => ({
    mobileOpen: false,
    toggleMobile: () => set(state => ({mobileOpen: !get().mobileOpen}))
}))

export const Navbar = () => {
    const {route} = useRouter();
    const {mobileOpen, toggleMobile} = useMobileState();

    return <nav className="bg-green-600 border-b border-green-300 border-opacity-25 lg:border-none">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div
                className="relative h-16 flex items-center justify-between lg:border-b lg:border-green-400 lg:border-opacity-25">
                <div className="px-2 flex items-center lg:px-0">
                    <div className="flex-shrink-0 mt-3">
                        {/*<Image src={'/assets/images/logo.png'} height={'48px'} width={'auto'}/>*/}
                    </div>
                    <div className="hidden lg:block lg:ml-10">
                        <div className="flex space-x-4">
                            {
                                publicRoutes.map(r => {
                                    const isActive = r.path === route;
                                    return <Link href={r.path}><a className={`rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-green-500 hover:bg-opacity-75 ${isActive ? 'bg-green-700' : ''}`}>{r.title}</a></Link>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        onClick={toggleMobile}
                        className="bg-green-600 p-2 rounded-md inline-flex items-center justify-center text-green-200 hover:text-white hover:bg-green-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
                        aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:block lg:ml-4">
                    <div className="flex items-center">
                        <button
                            className="bg-green-600 flex-shrink-0 rounded-full p-1 text-green-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white">
                            <span className="sr-only">View notifications</span>
                            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 24 24" stroke="none" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className={`${mobileOpen ? 'block' : 'hidden'} lg:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
                {
                    publicRoutes.map(r => {
                        const isActive = r.path === route;
                        return <Link href={r.path}><a className={`block rounded-md py-2 px-3 text-base font-medium text-white ${isActive ? 'bg-green-700' : 'hover:bg-green-500 hover:bg-opacity-75'}`}>{r.title}</a></Link>
                    })
                }
            </div>
            <div className={'px-2 pt-2 space-y-1 border-t border-green-100 border-opacity-25'}>
                <a href={'https://facebook.com'} className={`block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-green-500 hover:bg-opacity-75`}>Kids im Wald auf Facebook</a>
            </div>
        </div>
    </nav>
}