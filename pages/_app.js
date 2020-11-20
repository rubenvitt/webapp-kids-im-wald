import '../styles/globals.css'
import Image from "next/image";
import React from "react";
import {useRouter} from "next/router";
import {publicRoutes} from "../routes";
import {PageContainer} from "../components/page-container.component";

function MyApp({Component, pageProps}) {
    const {route} = useRouter();
    const pageTitle = publicRoutes.find(r => r.path === route)?.title ?? '';
    return <>
        <PageContainer title={pageTitle}>
            <Component {...pageProps} />
        </PageContainer>
    </>
}

export default MyApp
