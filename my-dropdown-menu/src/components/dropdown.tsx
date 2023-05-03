import React, { useState, useEffect } from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { SiGithub } from 'react-icons/si';
import { RxStitchesLogo, RxTwitterLogo } from 'react-icons/rx'
import { BsCheck } from 'react-icons/bs'


function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Multi-level dropdown menu
export function Dropdown() {
  const [isFavoritesHovered, setIsFavoritesHovered] = useState(false);
  const [focusedElement, setFocusedElement] = useState('favorites');
  const [checked, setChecked] = useState('showToolbar');

  const favoritesRef = React.useRef(null);

  // TODO: Allow for arrow key navigation
  // Can't go back up to favorites from subMenuItems
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' && focusedElement === 'window') {
        setFocusedElement('favorites');
      }
      if (event.key === 'ArrowRight' && focusedElement === 'favorites') {
        setIsFavoritesHovered(true);
        setFocusedElement('subMenuFirstItem');
        console.log('event.key', event.key);
        console.log('focusedElement', focusedElement);
        console.log('isFavoritesHovered', isFavoritesHovered);
      } else if (event.key === 'ArrowDown' && focusedElement === 'favorites') {
        setIsFavoritesHovered(false);
        setFocusedElement('download');
        console.log('focusedElement', focusedElement);
        console.log('isFavoritesHovered', isFavoritesHovered);
      }

      if (event.key === 'ArrowDown' && focusedElement === 'subMenuThirdItem') {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusedElement]);


  return (
    <div className="relative inline-block text-left">
      <Menu>
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Options
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-1/2 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform -translate-x-1/2">
            <div className="py-1">
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <div
                    className={classNames(
                      active ? 'bg-blue-400 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className='flex flex-row '>
                      <div className='w-6'>{checked === 'type' ? <BsCheck size="1.5em" color="black" /> : ''} </div>
                      <div>New Type</div>
                    </div>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <div
                    role="button"
                    tabIndex={0}
                    className={classNames(
                      active ? 'bg-blue-400 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                    onFocus={() => { setFocusedElement('window'); }}
                  >
                    <div className='flex flex-row '>
                      <div className='w-6'>{checked === 'window' ? <BsCheck size="1.5em" color="black" /> : ''} </div>
                      <div>New Windows</div>
                    </div>
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <div
                    onMouseEnter={() => setIsFavoritesHovered(true)}
                    onMouseLeave={() => setIsFavoritesHovered(false)}
                    ref={favoritesRef}
                    onFocus={() => { setFocusedElement('favorites'); }}
                  >
                    <div
                      className={classNames(
                        focusedElement === 'favorite' ? 'bg-blue-400 text-gray-900' : active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      <div className="flex flex-row">
                        <div className='w-6'>{checked === 'favorites' ? <BsCheck size="1.5em" color="black" /> : ''} </div>
                        <div> Favorites</div>
                        <div className="justify-self-end"><ChevronRightIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /></div>
                      </div>

                    </div>
                  </div>
                )}
              </Menu.Item>
              {isFavoritesHovered && (
                <div
                  onMouseEnter={() => setIsFavoritesHovered(true)}
                  onMouseLeave={() => setIsFavoritesHovered(false)}
                  className="absolute top-20 left-0 z-20 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  style={{ marginLeft: '14rem' }}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onFocus={() => {
                      setFocusedElement('subMenuFirstItem');
                    }}
                    className="py-1">
                    <Menu.Item>
                      {({ active }: { active: boolean }) => (
                        <div
                          className={classNames(
                            focusedElement == 'subMenuFirstItem' && active ? 'bg-blue-400 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <div className="flex gap-x-2">
                            <div>
                              <SiGithub size="1.3em" color="black" />
                            </div>
                            <div onFocus={() => setFocusedElement('subMenuFirstItem')}>Github</div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }: { active: boolean }) => (
                        <div
                          role="button"
                          tabIndex={0}
                          onFocus={() => {
                            setFocusedElement('subMenuSecondItem');
                          }}
                          className={classNames(
                            active ? 'bg-blue-400 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <div className="flex gap-x-2">
                            <a>
                              <RxStitchesLogo size="1.3em" color="black" />
                            </a>
                            <a> Sititches</a>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }: { active: boolean }) => (
                        <div
                          onFocus={() => {
                            setFocusedElement('subMenuThirdItem');
                          }}
                          className={classNames(
                            active ? 'bg-blue-400 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <div className="flex gap-x-2">
                            <a>
                              <RxTwitterLogo size="1.3em" color="black" />
                            </a>
                            <a> Sititches</a>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </div>
              )}
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-blue-400 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className='flex flex-row '>
                      <div className='w-6'>{checked === 'download' ? <BsCheck size="1.5em" color="black" /> : ''} </div>
                      <div onFocus={() => setFocusedElement('download')}>Download</div>
                    </div>
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <div
                    className={classNames(
                      active ? 'bg-blue-400 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className='flex flex-row '>
                      <div className='w-6'>{checked === 'showToolbar' ? <BsCheck size="1.5em" color="black" /> : ''} </div>
                      <div>Show Toolbar</div>
                    </div>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <div
                    className={classNames(
                      active ? 'bg-blue-400 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className='flex flex-row '>
                      <div className='w-6'>{checked === 'showFullUrl' ? <BsCheck size="1.5em" color="black" /> : ''} </div>
                      <div>Show Full URLs</div>
                    </div>
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <div
                    className={classNames(
                      active ? 'bg-blue-400 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    <div className='flex flex-row '>
                      <div className='w-6'>{checked === 'delete' ? <BsCheck size="1.5em" color="black" /> : ''} </div>
                      <div>Delete</div>
                    </div>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu >

    </div >
  )
}

