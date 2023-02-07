import '../styles/globals.css';
import { AppTemplate } from '../components/templates/AppTemplate';
import { AppNavigation } from '../components/organisms/AppNavigation';

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
    return (
        <html lang="de" className="h-full">
            <head>
                <title>Kids im Wald</title>
                <meta name="description" content="Diese Seite befindet sich momentan im Aufbau" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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
