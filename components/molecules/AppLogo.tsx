import Image from 'next/image';
import logoPng from '../../assets/img/logo.png';

type Props = {
    clickable: boolean;
};

function Logo() {
    return (
        <>
            <span className="sr-only">Kids im Wald</span>
            <Image className="h-10 w-auto" src={logoPng} alt="" />
        </>
    );
}

export function AppLogo({ clickable }: Props) {
    if (clickable) {
        return (
            <a href="#contact">
                <Logo />
            </a>
        );
    }

    return (
        <div>
            <Logo />
        </div>
    );
}
