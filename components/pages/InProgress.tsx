export function InProgress() {
    return (
        <>
            <div className="min-h-full bg-white py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="mx-auto max-w-max">
                    <main className="sm:flex">
                        <p className="text-4xl font-bold tracking-tight text-primary-600 sm:text-5xl">🚧</p>
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Diese Seite
                                    befindet sich momentan im Aufbau.</h1>
                                <p className="mt-1 text-base text-gray-500">Besuchen Sie meine Website zu einem späteren
                                    Zeitpunkt erneut.</p>
                            </div>
                            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <a
                                    href="mailto:beate@kids-im-wald.de"
                                    className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                >
                                    Schreiben Sie mir eine E-Mail.
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
