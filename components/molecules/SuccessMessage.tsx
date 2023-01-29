import { VersendetIcon, XIcon } from '../../assets/svg';
import Link from 'next/link';

export function SuccessMessage() {
    return (
        <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-primary-600 p-2 shadow-lg sm:p-3">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg">
                                <VersendetIcon className="h-8 w-8 text-white" aria-hidden="true" />
                            </span>
                            <p className="ml-3 truncate font-medium text-white">
                                <span>Erfolgreich versendet!</span>
                                <span className="hidden md:inline">
                                    {' '}
                                    Ich werde mich so schnell wie möglich bei Ihnen melden.
                                </span>
                            </p>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                            <Link
                                href="#"
                                className="-mr-1 flex rounded-md p-2 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
