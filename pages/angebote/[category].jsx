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
            description
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
        fallback: true,
    };
}

export default function DefaultPage({category}) {
    const {setPageTitle, pageTitle} = usePageProperties();
    useEffect(() => setPageTitle(category?.title), [category]);

    return (
        <>
            <div className="mb-2">
                <div className="prose prose-sm lg:prose-lg">
                    <ReactMarkdown allowedTypes={["text", "paragraph"]} plugins={[gfm]} children={category.description} />
                </div>
            </div>
            <div className="bg-white shadow overflow-hidden rounded-md">
                <ul className="divide-y divide-gray-200 grid md:grid-cols-2 lg:grid-cols-3">
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
                                                                {
                                                                    element.price ? element.description ? <> <p className="inline lg:hidden">• </p>
                                                                        <br className="hidden lg:block" />
                                                                        <svg className="hidden lg:inline mx-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#221b38" fill="none" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                                                                            <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#221b38" d="M16.2999 16.2C15.3999 17.1 14.2 17.6 12.9 17.6C9.99995 17.6 7.69995 15.1 7.69995 12C7.69995 8.90002 9.99995 6.40002 12.9 6.40002C14.2 6.40002 15.3999 6.90002 16.2999 7.80002"/>
                                                                            <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#221b38" d="M6 10.8H12.5"/>
                                                                            <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#221b38" d="M6 13.2H12.5"/>
                                                                        </svg>
                                                                        {element.price}</> : element.price : ''
                                                                }
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