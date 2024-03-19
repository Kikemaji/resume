'use client';
import React from 'react';
import * as DropdownElem from '@radix-ui/react-dropdown-menu';
import { CiGlobe } from 'react-icons/ci';
import styles from './Dropdown.module.css';
import clsx from 'clsx';

const Dropdown = () => {
  return (
    <DropdownElem.Root>
      <DropdownElem.Trigger asChild>
        <button
          className="rounded-md border-white bg-black transition-colors hover:invert"
          aria-label="Customise options"
        >
          <CiGlobe className="h-5 w-5" />
        </button>
      </DropdownElem.Trigger>

      <DropdownElem.Portal>
        <DropdownElem.Content
          className={clsx(
            styles.AnimateSlideUp,
            'z-50 rounded-md bg-white p-0.5 text-black'
          )}
          sideOffset={5}
        >
          <DropdownElem.Item className="rounded-md p-1 hover:bg-black hover:text-white">
            <a href="/es">Español</a>
          </DropdownElem.Item>
          <DropdownElem.Item className="rounded-md p-1 hover:bg-black hover:text-white">
            <a href="/en">English</a>
          </DropdownElem.Item>
        </DropdownElem.Content>
      </DropdownElem.Portal>
    </DropdownElem.Root>
  );
};
export default Dropdown;
