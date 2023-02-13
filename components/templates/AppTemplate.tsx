import React from 'react';

type Props = {};

export function AppTemplate({ children }: React.PropsWithChildren<Props>) {
    return <main>{children}</main>;
}
