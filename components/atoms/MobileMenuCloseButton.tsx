import { XIcon } from '../../assets/svg';
import React from 'react';

export function MobileMenuCloseButton(props: {
    setOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
}) {
    return (
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-900" onClick={() => props.setOpen(false)}>
            <span className="sr-only">Menü schließen</span>
            <XIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    );
}
