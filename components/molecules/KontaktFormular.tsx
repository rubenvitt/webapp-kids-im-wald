import React from 'react';

export function KontaktFormular() {
    return (
        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
            <form action="/api/mail" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div className="sm:col-span-2">
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-900">
                        Name
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="full-name"
                            id="full-name"
                            autoComplete="name"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email Adresse
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                            Telefonnummer
                        </label>
                        <span id="phone-optional" className="text-sm text-gray-500">
                            Optional
                        </span>
                    </div>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            aria-describedby="phone-optional"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                        Betreff
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <div className="flex justify-between">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                            Nachricht
                        </label>
                        <span id="message-max" className="text-sm text-gray-500">
                            Höchstens 500 Zeichen
                        </span>
                    </div>
                    <div className="mt-1">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            aria-describedby="message-max"
                            defaultValue={''}
                        />
                    </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                        type="submit"
                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Nachricht senden
                    </button>
                </div>
            </form>
        </div>
    );
}
