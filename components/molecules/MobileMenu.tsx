import { NavigationItem } from '../../types/navigation';
import { Dialog } from '@headlessui/react';
import { MobileMenuHeader } from './MobileMenuHeader';
import { MobileMenuButtons } from './MobileMenuButtons';
import React from 'react';

export function MobileMenu(props: {
    setOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
    open: boolean;
    navigationItems: NavigationItem[];
}) {
    return (
        <Dialog as="div" open={props.open} onClose={props.setOpen}>
            <Dialog.Panel
                // focus="true"
                className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden"
            >
                <MobileMenuHeader {...props} />
                <MobileMenuButtons onPress={() => props.setOpen(false)} navigation={props.navigationItems} />
            </Dialog.Panel>
        </Dialog>
    );
}
