import Image from 'next/image';
import waldpaedagogikPng from '../../assets/img/Zertifikat Waldpädagogik.png';
import Link from 'next/link';

type Props = {
    className?: string;
};

export function WaldpaedagogikButton({ className }: Props) {
    return (
        <div className={'relative' + className}>
            <Link target="_blank" href="https://www.landesforsten.de/erleben/waldpaedagogik/waldpaedagogikzertifikat/">
                <Image src={waldpaedagogikPng} alt={'Test'} height={180} />
            </Link>
        </div>
    );
}
