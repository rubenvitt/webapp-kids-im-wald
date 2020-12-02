import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {usePageProperties} from "../../hooks/page-properties";
import Link from "next/link";
import {graphcms} from "../../utils/graphcms";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export async function getStaticProps({params}) {
    const {category} = await graphcms.request(
        `
    query MyQuery($url: String!) {
        category(where: {url: $url}) {
            title
            url
            offers {
                title
                description
                mainImage {
                    url
                }
                price
            }
            detail
  }
}

  `,
        {
            url: params.category
        }
    );

    return {
        props: {
            category,
        },
        revalidate: 1,
    };
}

export async function getStaticPaths() {
    const {categories} = await graphcms.request(`
    query { 
        categories {
          url
        }
      }
  `);

    return {
        paths: categories.map(({url}) => ({
            params: {
                category: encodeURIComponent(url)
            },
        })),
        fallback: false,
    };
}

export default function DefaultPage({category}) {
    const {setPageTitle, pageTitle} = usePageProperties();
    useEffect(() => setPageTitle(category?.title), [category]);

    return (
        <>
            <div className="mb-2">
                <div className="prose max-w-none prose-sm lg:prose-lg">
                    <ReactMarkdown allowedTypes={["text", "paragraph"]} plugins={[gfm]} children={category.detail} />
                </div>
            </div>
            <div className="bg-white shadow overflow-hidden rounded-md">
                <ul className={`divide-y divide-gray-200 grid ${category?.offers.length > 2 ? 'lg:grid-cols-3 md:grid-cols-2' : ''}`}>
                    {
                        category?.offers.map(element => {
                            return <li className="lg:flex-grow lg:flex">
                                <Link href={'/angebote/' + encodeURIComponent(category.url) + '/' + encodeURIComponent(element.title)}>
                                    <a className="block w-full hover:bg-gray-50">
                                        <div className="flex items-center">
                                            {
                                                element.mainImage ? <div className="min-w-0 flex-shrink mr-6">
                                                    <img className="object-cover w-36 bg-blue-200"
                                                         src={element.mainImage?.url}
                                                         alt={'test'}/>
                                                </div> : undefined
                                            }
                                            <div className="px-4 py-4 sm:px-6 min-w-0 flex-1">
                                                <div>
                                                    <div className="flex text-sm font-medium text-green-600 truncate">
                                                        <p>{element.title}</p>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="items-center text-sm text-gray-500">
                                                            <p>
                                                                {
                                                                    element.description
                                                                }
                                                                <p className="inline text-green-700">
                                                                {
                                                                    element.price ? element.description ? <> <p className="inline lg:hidden">• </p>
                                                                        <br className="hidden lg:block" />
                                                                        {element.price}</> : element.price : ''
                                                                }
                                                                </p>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 sm:px-6 ml-5 flex-shrink-0 md:hidden">
                                                <svg className="h-5 w-5 text-gray-400"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    );
}