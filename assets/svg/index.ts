import Icons8BirthdayCake from './icons8-birthday-cake.svg';
import Icons8BrokenRobot from './icons8-broken-robot.svg';
import Icons8ChevronRight from './icons8-chevron-right.svg';
import Icons8Children from './icons8-children.svg';
import Icons8Crowd from './icons8-crowd.svg';
import Icons8HomePage from './icons8-home-page.svg';
import Icons8Letter from './icons8-letter.svg';
import Icons8Menu from './icons8-menu.svg';
import Icons8Phone from './icons8-phone.svg';
import Icons8School from './icons8-school.svg';
import Icons8Versendet from './icons8-versendet.svg';
import Icons8X from './icons8-x.svg';

import { SVGProps } from 'react';

export interface SVGRProps {
    title?: string;
    titleId?: string;
}

export type SVG = (props: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element;

export const BirthdayCakeIcon: SVG = Icons8BirthdayCake;
export const BrokenRobotIcon: SVG = Icons8BrokenRobot;
export const ChevronLeftRight: SVG = Icons8ChevronRight;
export const ChildrenIcon: SVG = Icons8Children;
export const CrowdIcon: SVG = Icons8Crowd;

export const HomePageIcon: SVG = Icons8HomePage;
export const LetterIcon: SVG = Icons8Letter;
export const MenuIcon: SVG = Icons8Menu;
export const PhoneIcon: SVG = Icons8Phone;
export const SchoolIcon: SVG = Icons8School;
export const VersendetIcon: SVG = Icons8Versendet;
export const XIcon: SVG = Icons8X;
