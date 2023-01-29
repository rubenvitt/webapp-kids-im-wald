import React from 'react';
import { MailForm } from './MailForm';

export function KontaktFormular() {
    return (
        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 className="text-lg font-medium text-gray-900">Senden Sie mir eine Nachricht</h3>
            <MailForm />
        </div>
    );
}
