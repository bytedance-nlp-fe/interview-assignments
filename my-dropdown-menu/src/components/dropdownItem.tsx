import React from "react";
import { Menu } from "@headlessui/react";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

function classNames(...classes: (string | boolean)[]): string {
    return classes.filter(Boolean).join(' ');
}

export function DropdownMenuItem({ label, Icon, checked }: { label: string, Icon: any, checked: boolean }) {
    return (
        <Menu.Item>
            {({ active }: { active: boolean }) => (
                <div
                    className={classNames(
                        active ? 'bg-blue-400 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                >
                    <div className='flex flex-row '>
                        <div className='w-8'>{checked === true ? <Icon size="1.5em" color="black" /> : ''} </div>
                        <div>{label}</div>
                    </div>
                </div>
            )}
        </Menu.Item>
    );
}


export function DropdownMenuNestedItem({ label, Icon, checked, ishovered }: { label: string, Icon: any, checked: boolean, ishovered: boolean }) {
    return (
        <div>
            <Menu.Item>
                {({ active }: { active: boolean }) => (
                    <div
                        className={classNames(
                            active ? 'bg-blue-400 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                    >
                        <div className='flex flex-row '>
                            <div className='w-8'>{checked === true ? <Icon size="1.5em" color="black" /> : ''} </div>
                            <div>{label}</div>
                            <div className="justify-self-end items-end"><ChevronRightIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /></div>
                        </div>
                    </div>
                )}
            </Menu.Item>
        </div>
    );
}