import { Navbar } from '../molecules/Navbar';

const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Angebote', href: '/angebote' },
    { name: 'Infos', href: '/infos' },
    { name: 'Kontakt', href: '/kontakt' },
];

export function AppNavbar() {
    return <Navbar items={navigationItems} />;
}
