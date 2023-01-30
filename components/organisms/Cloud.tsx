import flambacher from '../../assets/img/partner/flambacher.png';
import goslar from '../../assets/img/partner/goslar.png';
import hahnenklee from '../../assets/img/partner/hahnenklee.png';
import djh from '../../assets/img/partner/djh.png';
import landesforsten from '../../assets/img/partner/landesforsten.jpg';
import pilzcoach from '../../assets/img/partner/pilzcoach.png';
import sz from '../../assets/img/partner/sz.png';
import waldbaden from '../../assets/img/partner/waldbaden.png';
import waldforum from '../../assets/img/partner/waldforum.jpg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Partner = {
    name: string;
    img: StaticImageData;
    link?: string;
};
const partner: Partner[] = [
    { name: 'Flambacher', img: flambacher, link: 'https://www.flambacher.de/' },
    { name: 'Goslar', img: goslar, link: 'https://www.goslar.de/' },
    { name: 'Hahnenklee', img: hahnenklee, link: 'https://www.hahnenklee.de/' },
    { name: 'Landesforsten', img: landesforsten, link: 'https://www.landesforsten.de/' },
    { name: 'Stadt Salzgitter', img: sz, link: 'https://www.salzgitter.de/' },
    {
        name: 'Waldforum',
        img: waldforum,
        link: 'https://www.landesforsten.de/erleben/unsere-naturtalente/waldforum-riddagshausen//',
    },
    { name: 'Waldbaden', img: waldbaden, link: 'https://www.waldbaden.de/' },
    { name: 'Pilzcoach', img: pilzcoach, link: 'https://www.dgfm-ev.de/qualifikationen/pilzcoach/profil/' },
    { name: 'Deutscher Jugendherbergsverband', img: djh, link: 'https://www.jugendherberge.de/' },
];

export function Cloud() {
    return (
        <div className="bg-primary-700">
            <div className="mx-auto max-w-7xl py-16 px-6 sm:py-20 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white">In Kooperation mit</h2>
                <div className="mt-8 flow-root lg:mt-10">
                    <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                        {partner.map((partner) => (
                            <div key={partner.name} className={'m-4'}>
                                {partner.link ? (
                                    <Link
                                        href={partner.link}
                                        className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0 block"
                                    >
                                        <Image src={partner.img} alt={partner.name} width={200} height={100} />
                                    </Link>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
