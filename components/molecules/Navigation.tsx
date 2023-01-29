import { NavigationItem } from '../../types/navigation';
import { AppLogo } from './AppLogo';
import { MobileMenuOpenButton } from '../atoms/MobileMenuOpenButton';
import { NavigationLink } from '../atoms/NavigationLink';
import { MailLink } from './MailLink';
import React from 'react';

export function Navigation(props: {
    navigationItems: NavigationItem[];
    setMobileMenuOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
}) {
    return (
        <nav className="flex items-center justify-between pt-6" aria-label="Global">
            <div className="flex lg:flex-1">
                <AppLogo clickable={false} />
            </div>
            <div className="flex lg:hidden">
                <MobileMenuOpenButton setOpen={props.setMobileMenuOpen} />
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {props.navigationItems.map((item) => (
                    <NavigationLink key={item.name} item={item} />
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <MailLink />
            </div>
        </nav>
    );
}
