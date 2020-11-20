import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <div className="bg-green-600 pb-32">
                    <nav className="bg-green-600 border-b border-green-300 border-opacity-25 lg:border-none">
                        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                            <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-green-400 lg:border-opacity-25">
                                <div className="px-2 flex items-center lg:px-0">
                                    <div className="flex-shrink-0 mt-3">
                                        <Image src={'/assets/images/logo.png'} height={'48px'} width={'auto'} />
                                    </div>
                                    <div className="hidden lg:block lg:ml-10">
                                        <div className="flex space-x-4">
                                            <a href="#" className="rounded-md bg-green-700 py-2 px-3 text-sm font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                                Dashboard
                                            </a>

                                            <a href="#" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                                Team
                                            </a>

                                            <a href="#" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                                Projects
                                            </a>

                                            <a href="#" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                                Calendar
                                            </a>

                                            <a href="#" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                                Reports
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                                    <div className="max-w-lg w-full lg:max-w-xs">
                                        <label for="search" className="sr-only">Search</label>
                                        <div className="relative text-gray-400 focus-within:text-gray-600">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <input id="search" className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white focus:border-white sm:text-sm" placeholder="Search" type="search" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex lg:hidden">
                                    <button className="bg-green-600 p-2 rounded-md inline-flex items-center justify-center text-green-200 hover:text-white hover:bg-green-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>
                                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="hidden lg:block lg:ml-4">
                                    <div className="flex items-center">
                                        <button className="bg-green-600 flex-shrink-0 rounded-full p-1 text-green-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white">
                                            <span className="sr-only">View notifications</span>
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                        </button>

                                        <div className="ml-3 relative flex-shrink-0">
                                            <div>
                                                <button className="bg-green-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white" id="user-menu" aria-haspopup="true">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="rounded-full h-8 w-8" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                                </button>
                                            </div>
                                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                    Your Profile
                                                </a>

                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                    Settings
                                                </a>

                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                    Sign out
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <a href="#" className="block bg-green-700 rounded-md py-2 px-3 text-base font-medium text-white">
                                    Dashboard
                                </a>

                                <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                    Team
                                </a>

                                <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                    Projects
                                </a>

                                <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                    Calendar
                                </a>

                                <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                    Reports
                                </a>
                            </div>
                            <div className="pt-4 pb-3 border-t border-green-700">
                                <div className="px-5 flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="rounded-full h-10 w-10" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-white">Tom Cook</div>
                                        <div className="text-sm font-medium text-green-300">tom@example.com</div>
                                    </div>
                                    <button className="ml-auto bg-green-600 flex-shrink-0 rounded-full p-1 text-green-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white">
                                        <span className="sr-only">View notifications</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-3 px-2 space-y-1">
                                    <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                        Your Profile
                                    </a>

                                    <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                        Settings
                                    </a>

                                    <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <header className="py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-white">
                                Dashboard
                            </h1>
                        </div>
                    </header>
                </div>

                <main className="-mt-32">
                    <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                            <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg"></div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
