import '../styles/globals.css';
import { AppTemplate } from '../components/templates/AppTemplate';
import { AppNavigation } from '../components/organisms/AppNavigation';
import React from 'react';

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
    return (
        <html lang="de" className="h-full">
            <head>
                <title>Kids im Wald</title>
                <meta
                    name="description"
                    content="Kindergeburtstage im Wald, Waldführungen mit Schulklassen & KiTas. Waldbaden. Beate Vitt • zertifizierte Waldpädagogin, Pizchoach"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#eab308" />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </head>
            <body className="h-full">
                <AppTemplate>
                    <AppNavigation />
                    {children}
                </AppTemplate>
            </body>
        </html>
    );
}
