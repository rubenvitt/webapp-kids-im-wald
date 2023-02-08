import React from 'react';
import { NavigationItem } from '../../types/navigation';
import classNames from 'classnames';
import Link from 'next/link';

export function NavigationLink({ item, className }: { item: NavigationItem; className?: string }) {
    return (
        <Link key={item.name} href={item.href} className={classNames(`text-sm font-semibold leading-6`, className)}>
            {item.name}
        </Link>
    );
}
