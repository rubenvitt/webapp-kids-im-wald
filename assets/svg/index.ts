import Icons8BrokenRobot from './icons8-broken-robot.svg';
import Icons8ErsteHilfeKoffer from './icons8-erste-hilfe-koffer.svg';
import Icons8Feuchtigkeitsmesser from './icons8-feuchtigkeitsmesser.svg';
import Icons8Kaefer from './icons8-käfer.svg';
import Icons8Letter from './icons8-letter.svg';
import Icons8Menu from './icons8-menu.svg';
import Icons8Maerchen from './icons8-märchen.svg';
import Icons8Phone from './icons8-phone.svg';
import Icons8Pfeil from './icons8-pfeil.svg';
import Icons8Pilz from './icons8-pilz.svg';
import Icons8Schatztruhe from './icons8-schatztruhe.svg';
import Icons8Tee from './icons8-tee.svg';
import Icons8Versendet from './icons8-versendet.svg';
import Icons8Wald from './icons8-wald.svg';
import Icons8X from './icons8-x.svg';

import { SVGProps } from 'react';

export interface SVGRProps {
    title?: string;
    titleId?: string;
}

export type SVG = (props: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element;

export const BrokenRobotIcon: SVG = Icons8BrokenRobot;
export const ErsteHilfeKofferIcon: SVG = Icons8ErsteHilfeKoffer;
export const FeuchtigkeitsmesserIcon: SVG = Icons8Feuchtigkeitsmesser;
export const KaeferIcon: SVG = Icons8Kaefer;
export const LetterIcon: SVG = Icons8Letter;
export const MenuIcon: SVG = Icons8Menu;
export const MaerchenIcon: SVG = Icons8Maerchen;
export const PhoneIcon: SVG = Icons8Phone;
export const PfeilIcon: SVG = Icons8Pfeil;
export const PilzIcon: SVG = Icons8Pilz;
export const SchatztruheIcon: SVG = Icons8Schatztruhe;
export const TeeIcon: SVG = Icons8Tee;
export const VersendetIcon: SVG = Icons8Versendet;
export const WaldIcon: SVG = Icons8Wald;
export const XIcon: SVG = Icons8X;
