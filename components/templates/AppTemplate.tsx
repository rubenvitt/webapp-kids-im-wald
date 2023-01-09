import React from 'react';
import { AppNavbar } from '../organisms/AppNavbar';

type Props = {};

export function AppTemplate({ children }: React.PropsWithChildren<Props>) {
    return (
        <>
            <AppNavbar />
            <main>{children}</main>
        </>
    );
}
