import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {usePageProperties} from "../../../hooks/page-properties";

export default function DefaultPage() {
    const router = useRouter();
    const {category, offer} = router.query;

    return <>
        Category: {category}
        Offer: {offer}
    </>;
}