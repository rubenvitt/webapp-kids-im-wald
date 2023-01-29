import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { BrokenRobotIcon } from '../../assets/svg';

export function MailSendingFailedMessage() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel>
                <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="rounded-lg bg-red-600 p-2 shadow-lg sm:p-3">
                            <div className="flex flex-wrap items-center justify-between">
                                <div className="flex w-0 flex-1 items-center">
                                    <span className="flex rounded-lg">
                                        <BrokenRobotIcon className="h-8 w-8 text-white" aria-hidden="true" />
                                    </span>
                                    <Dialog.Title>
                                        <p className="ml-3 truncate font-medium text-white">
                                            <span>Fehler beim Absenden</span>
                                            <span className="hidden md:inline">
                                                {' '}
                                                Beim Absenden der Mail ist ein Fehler aufgetreten. Bitte schreiben Sie
                                                mir eine E-Mail.
                                            </span>
                                        </p>
                                    </Dialog.Title>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
}
