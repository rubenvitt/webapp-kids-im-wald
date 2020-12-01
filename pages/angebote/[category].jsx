import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {usePageProperties} from "../../hooks/page-properties";
import Link from "next/link";
import {graphcms} from "../../utils/graphcms";

export async function getStaticProps({params}) {
    const {category} = await graphcms.request(
        `
    query MyQuery($title: String!) {
        category(where: {title: $title}) {
            title
            offers {
                title
                mainImage {
                    url
                }
            }
            description
  }
}

  `,
        {
            title: params.category
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
          title
        }
      }
  `);

    return {
        paths: categories.map(({title}) => ({
            params: {
                category: encodeURIComponent(title)
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
            Category: {category?.description}
            <div className="bg-white shadow overflow-hidden rounded-md">
                <ul className="divide-y divide-gray-200">
                    {
                        [].map(element => {
                            return <li>
                                <Link href={'/angebote/geburtstag/' + element.link}>
                                    <a className="block hover:bg-gray-50">
                                        <div className="flex items-center">
                                            <div className="min-w-0 flex-shrink mr-6">
                                                <img className="object-cover w-36 bg-blue-200"
                                                     src={'https://kids-im-wald.de/wp-content/uploads/2018/07/D6506274-AFF7-4FED-BEE6-40D89785B2A2.jpeg'}
                                                     alt={'test'}/>
                                            </div>
                                            <div className="px-4 py-4 sm:px-6 min-w-0 flex-1">
                                                <div>
                                                    <div className="flex text-sm font-medium text-green-600 truncate">
                                                        <p>{element.title}</p>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="items-center text-sm text-gray-500">
                                                            <p>
                                                                {
                                                                    element.goodFor ? 'Geeignet für ' + element.goodFor : ''
                                                                }
                                                                {
                                                                    element.price ? element.goodFor ? ' • ' + element.price : element.price : ''
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 sm:px-6 ml-5 flex-shrink-0">
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