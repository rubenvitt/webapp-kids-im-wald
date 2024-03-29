'use client';
import React, { useState } from 'react';
import { SuccessMessage } from './SuccessMessage';
import { SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames';
import { MailSendingFailedMessage } from './MailSendingFailedMessage';

type Inputs = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

export function MailForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting, isSubmitted },
    } = useForm<Inputs>();
    const [isError, setIsError] = useState(false);
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);
        await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (!response.ok) {
                setIsError(true);
            }
        });
    };

    return (
        <>
            {isSubmitted && !isError && <SuccessMessage />}
            {isError && <MailSendingFailedMessage />}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div className="sm:col-span-2">
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-900">
                        Name
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="full-name"
                            autoComplete="name"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            disabled={isSubmitting || isSubmitted}
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span className="text-red-500">Dieses Feld ist erforderlich</span>}
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email Adresse
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            disabled={isSubmitting || isSubmitted}
                            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                        />
                        {errors.email && <span className="text-red-500">Dieses Feld ist erforderlich</span>}
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                            Telefonnummer
                        </label>
                        <span id="phone-optional" className="text-sm text-gray-500">
                            Optional
                        </span>
                    </div>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="phone"
                            autoComplete="tel"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            aria-describedby="phone-optional"
                            disabled={isSubmitting || isSubmitted}
                            {...register('phone')}
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                        Betreff
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            id="subject"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            disabled={isSubmitting || isSubmitted}
                            {...register('subject', { required: true })}
                        />
                        {errors.subject && <span className="text-red-500">Dieses Feld ist erforderlich</span>}
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <div className="flex justify-between">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                            Nachricht
                        </label>
                        <span id="message-max" className="text-sm text-gray-500">
                            Höchstens 500 Zeichen
                        </span>
                    </div>
                    <div className="mt-1">
                        <textarea
                            id="message"
                            rows={4}
                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            aria-describedby="message-max"
                            defaultValue={''}
                            disabled={isSubmitting || isSubmitted}
                            {...register('message', { required: true, maxLength: 500 })}
                        />
                        {errors.message?.type === 'required' && (
                            <span className="text-red-500">Dieses Feld ist erforderlich</span>
                        )}
                        {errors.message?.type === 'maxLength' && (
                            <span className="text-red-500">Maximale Zeichenanzahl erreicht</span>
                        )}
                    </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                        disabled={isSubmitting || isSubmitted}
                        type="submit"
                        className={classNames(
                            isSubmitting && 'cursor-not-allowed',
                            isSubmitted && (isError ? 'bg-red-500' : 'bg-gray-500'),
                            'mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto',
                        )}
                    >
                        {isSubmitting
                            ? 'Wird gesendet...'
                            : isSubmitted
                            ? isError
                                ? 'Fehler'
                                : 'Nachricht gesendet'
                            : 'Nachricht senden'}
                    </button>
                </div>
            </form>
        </>
    );
}
