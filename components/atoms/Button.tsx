'use client';
import { SVG } from '../../assets/svg';
import React from 'react';
import classNames from 'classnames';

class Props {
    Icon?: SVG;
    onClick?: (() => void) | string;
    iconOnlyAllowed?: boolean;
}

export function Button({ children, Icon, onClick, iconOnlyAllowed = true }: React.PropsWithChildren<Props>) {
    return (
        <>
            <button
                onClick={(event) => {
                    if (onClick) {
                        if (typeof onClick === 'function') {
                            onClick();
                        }
                        if (typeof onClick === 'string') {
                            window.location.href = onClick;
                        }
                    } else {
                        console.warn('No onClick handler defined');
                    }
                }}
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-secondary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
            >
                {Icon && (
                    <Icon className={classNames(!iconOnlyAllowed && 'mr-2', 'h-5 w-5 block')} aria-hidden="true" />
                )}
                <p className={Icon && iconOnlyAllowed ? 'sr-only lg:not-sr-only lg:ml-1' : 'block'}>{children}</p>
            </button>
        </>
    );
}
