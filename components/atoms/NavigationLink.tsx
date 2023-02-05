import React from 'react';
import { NavigationItem } from '../../types/navigation';
import classNames from 'classnames';

export function NavigationLink({ item, className }: { item: NavigationItem; className?: string }) {
    return (
        <a key={item.name} href={item.href} className={classNames(`text-sm font-semibold leading-6`, className)}>
            {item.name}
        </a>
    );
}
