import { AppLogo } from './AppLogo';
import React from 'react';
import { MobileMenuCloseButton } from '../atoms/MobileMenuCloseButton';

export function MobileMenuHeader(props: {
    setOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
    open: boolean;
}) {
    return (
        <div className="flex items-center justify-between">
            <AppLogo clickable={false} />
            <MobileMenuCloseButton {...props} />
        </div>
    );
}
