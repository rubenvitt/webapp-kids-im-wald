import Icons8Letter from './icons8-letter.svg';

import { SVGProps } from 'react';

export interface SVGRProps {
    title?: string;
    titleId?: string;
}

export type SVG = (props: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element;

export const LetterIcon: SVG = Icons8Letter;
