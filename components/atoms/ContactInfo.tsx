import { SVG } from '../../assets/svg';
import React from 'react';
import Link from 'next/link';

interface Props {
    Icon: SVG;
    contactType: 'Telefonnummer' | 'E-Mail';
    value: string;
    className?: string;
}

function withoutWhitespace(value: string) {
    return value.replace(/\s/g, '');
}

function createHref(value: string, contactType: 'Telefonnummer' | 'E-Mail') {
    return contactType === 'Telefonnummer' ? `tel:${withoutWhitespace(value)}` : `mailto:${value}`;
}

export function ContactInfo({ Icon, contactType, value, className = 'text-gray-500' }: Props) {
    return (
        <p className={className}>
            <Icon className="inline-block w-6 h-6 mr-2" />
            <span className="sr-only">{contactType}:</span>
            <Link href={createHref(value, contactType)}>{value}</Link>
        </p>
    );
}
