import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {usePageProperties} from "../../../hooks/page-properties";
import {graphcms} from "../../../utils/graphcms";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export async function getStaticProps({params}) {
    const {offer} = await graphcms.request(
        `
    query MyQuery($title: String!) {
        offer(where: {title: $title}) {
                title
                description
                mainImage {
                    url
                }
                price
                longText
  }
}

  `,
        {
            title: params.offer
        }
    );

    return {
        props: {
            offer,
        },
    };
}

export async function getStaticPaths() {
    const {categories} = await graphcms.request(`
    query { 
        categories {
            url
            offers {
                title
            }
        } 
    }
  `);

    const list = [];
    categories.forEach(category => {
        category.offers.forEach(offer => {
            list.push({category: category.url, offer: offer.title});
        })
    })

    return {
        paths: list.map(({category, offer}) => ({
            params: {
                category: encodeURIComponent(category),
                offer: encodeURIComponent(offer)
            },
        })),
        fallback: true,
    };
}

export default function DefaultPage({offer}) {
    const {setPageTitle} = usePageProperties();
    useEffect(() => {
        setPageTitle(offer.title);
    }, [offer.title])

    return <>
        <div className="prose lg:prose-lg max-w-none mb-3">
            <ReactMarkdown
                renderers={{
                    "image": (img) => {
                        console.log('rendering image', img);
                        return <img className="max-h-96 inline-flex float-left mr-2 rounded-md" {...img} />
                    }
                }}
                plugins={[gfm]}
                children={offer.longText}
            />
        </div>
    </>;
}