import Head from 'next/head'
import {InProgress} from "../components/pages/InProgress";

export default function Home() {
    return (
        <>
            <Head>
                <title>Kids im Wald</title>
                <meta name="description" content="Diese Seite befindet sich momentan im Aufbau"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <InProgress/>
            </main>
        </>
    )
}
