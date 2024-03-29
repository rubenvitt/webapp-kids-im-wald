import moment from 'moment';

export function Footer() {
    return (
        <footer className="bg-white mb-2">
            <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; {moment().year()} Beate Vitt. Alle Rechte vorbehalten. Geschrieben von{' '}
                        <a className="hover:text-orange-500" href="https://rubeen.one" target="_blank" rel="noreferrer">
                            Ruben Vitt 🐕
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
}
