import React from 'react';
import Link from 'next/link';
import {graphcms} from "../utils/graphcms";

export async function getStaticProps() {
    const {categories} = await graphcms.request(
        `
      query { 
        categories {
          title, coverImage {url}, description, url
        }
      }
    `
    );

    const {fixText} = await graphcms.request(
        `
      query { 
        fixText(where: {textposition: Beschreibung_Startseite}) {
            content
        }
      }
    `
    );

    return {
        props: {
            categories,
            description: fixText.content,
        },
    };
}

export default function Home({categories, description}) {
    return (
        <>
            <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                    <span className="block xl:inline">Waldgeburtstag</span>
                    <span
                        className="block text-green-600 xl:inline">{' '}in Salzgitter und Umgebung</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    {
                        description ? description : "Ob Waldführung für Schulklassen, ein Waldgeburtstag für Kinder oder Waldbaden für Sie und Ihre Freunde, informieren Sie sich auf meiner Seite und fragen Sie noch heute ein tollen Erlebnis an."
                    }
                </p>
            </div>

            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12'}>
                {
                    categories.map(category => {
                        return <Link href={'/angebote/' + encodeURIComponent(category.url)}>
                            <a
                                className={'col-span-1 shadow rounded-lg m-2 text-center bg-coolGray-50 hover:bg-coolGray-100'}>
                                {
                                    category.coverImage ? <div>
                                        <img className={'rounded-t-lg w-full object-cover h-48'}
                                             src={category.coverImage.url}
                                             alt={'Bild x'}/>
                                    </div> : undefined
                                }
                                <div className={'p-3'}>
                                    <div className={'text-green-600 font-semibold'}>
                                        {category.title}
                                    </div>
                                    <div
                                        className={'text-left text-gray-600 border-t border-gray-200 mt-1.5 pt-1.5 overflow-hidden'}>
                                        {
                                            category.description
                                        }
                                    </div>
                                </div>
                            </a>
                        </Link>
                    })
                }
            </div>
        </>
    )
}
