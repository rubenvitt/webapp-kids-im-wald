import React from 'react';

export default function Infobox({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="rounded-md bg-primary-50 px-2 py-1">
            <div className="flex">
                <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-primary-700">{children}</p>
                </div>
            </div>
        </div>
    );
}
