import React, { useState, useEffect } from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { SiGithub } from 'react-icons/si';
import { RxStitchesLogo, RxTwitterLogo } from 'react-icons/rx'
import { BsCheck } from 'react-icons/bs'
import { DropdownMenuItem, DropdownMenuNestedItem } from './dropdownItem';

// Multi-level dropdown menu
export function DropdownMenu() {
  const [isFavoritesHovered, setIsFavoritesHovered] = useState(false);
  const [focusedElement, setFocusedElement] = useState('favorites');
  const [checked, setChecked] = useState('showToolbar');

  // const favoritesRef = React.useRef(null);

  // TODO: Allow for arrow key navigation
  // Can't go back up to favorites from subMenuItems
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && focusedElement === 'favorites') {
        setIsFavoritesHovered(true);
        setFocusedElement('subMenuFirstItem');
        console.log('isFavoritesHovered', isFavoritesHovered);
      } else if (event.key === 'ArrowDown' && focusedElement === 'favorites') {
        setIsFavoritesHovered(false);
        setFocusedElement('download');
        console.log('isFavoritesHovered', isFavoritesHovered);
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
              <DropdownMenuItem label="New Tab" Icon={BsCheck} checked={checked === 'newTab'} />
              <DropdownMenuItem label='New Window' Icon={BsCheck} checked={checked === 'newWindow'} />
            </div>
            <div className="py-1">
              <div
                onMouseEnter={() => setIsFavoritesHovered(true)}
                onMouseLeave={() => setIsFavoritesHovered(false)}
                // ref={favoritesRef}
                onFocus={() => { setFocusedElement('favorites'); console.log("onfocused") }}
              >
                <DropdownMenuNestedItem label="Favorites" Icon={BsCheck} checked={checked === 'favorites'} ishovered={isFavoritesHovered} />
              </div>
              {isFavoritesHovered && (
                <div
                  onMouseEnter={() => setIsFavoritesHovered(true)}
                  onMouseLeave={() => setIsFavoritesHovered(false)}
                  className="absolute top-20 left-0 z-20 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  style={{ marginLeft: '14rem' }}
                >
                  <DropdownMenuItem label="GitHub" Icon={SiGithub} checked={true} />
                  <DropdownMenuItem label='Stitches' Icon={RxStitchesLogo} checked={true} />
                  <DropdownMenuItem label='Twitter' Icon={RxTwitterLogo} checked={true} />
                </div>
              )}
              <DropdownMenuItem label='Downloads' Icon={BsCheck} checked={checked === 'downloads'} />
            </div>
            <div className="py-1">
              <DropdownMenuItem label='Show Toolbar' Icon={BsCheck} checked={checked === 'showToolbar'} />
              <DropdownMenuItem label='Show Full URLs' Icon={BsCheck} checked={checked === 'showFullURLs'} />
            </div>
            <div className="py-1">
              <DropdownMenuItem label='Delete' Icon={BsCheck} checked={checked === 'delete'} />
            </div>
          </Menu.Items>
        </Transition>
      </Menu >

    </div >
  )
}

