import React from 'react';
import { NavigationItem } from '../../types/navigation';

export function NavigationLink({ item }: { item: NavigationItem }) {
    return (
        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
            {item.name}
        </a>
    );
}
