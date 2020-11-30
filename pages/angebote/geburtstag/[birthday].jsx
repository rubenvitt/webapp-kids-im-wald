import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {usePageProperties} from "../../../hooks/page-properties";

export default function DefaultPage() {
    const router = useRouter();
    const {birthday} = router.query;
    const {setPageTitle, pageTitle} = usePageProperties();
    useEffect(() => setPageTitle(birthday), [birthday]);

    return <>
        Geburtstag: {birthday}
    </>;
}