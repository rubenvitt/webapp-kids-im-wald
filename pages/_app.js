import '../styles/globals.css'
import Image from "next/image";
import React from "react";
import {useRouter} from "next/router";
import {allRoutes} from "../routes";
import {PageContainer} from "../components/page-container.component";
import {usePageProperties} from "../hooks/page-properties";

function MyApp({Component, pageProps}) {
    const {route} = useRouter();
    const propertiesTitle = usePageProperties(state => state.pageTitle);
    const foundRoute = allRoutes.find(r => r.path === route);
    let pageTitle = foundRoute?.hideTitle ? '' : foundRoute?.title ?? propertiesTitle;
    return <>
        <PageContainer title={pageTitle}>
            <Component {...pageProps} />
        </PageContainer>
    </>
}

export default MyApp
