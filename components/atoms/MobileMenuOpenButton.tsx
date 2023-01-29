import { MenuIcon } from '../../assets/svg';
import React from 'react';

export function MobileMenuOpenButton(props: { setOpen: (value: ((prevState: boolean) => boolean) | boolean) => void }) {
    return (
        <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => props.setOpen(true)}
        >
            <span className="sr-only">Menü öffnen</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    );
}
