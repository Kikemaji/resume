'use client';
import React from 'react';
import * as DialogElem from '@radix-ui/react-dialog';
import { RxCross2 } from 'react-icons/rx';
import './styles.css';
import clsx from 'clsx';

interface DialogProps {
  triggerIcon?: React.ReactNode;
  triggerText: string;
  triggerClassName?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Dialog = ({
  triggerIcon,
  triggerText,
  triggerClassName = '',
  title,
  description,
  children,
}: DialogProps) => (
  <DialogElem.Root>
    <DialogElem.Trigger asChild>
      <button
        className={clsx(
          'flex items-center gap-4 rounded-md bg-white p-3 text-black',
          triggerClassName
        )}
      >
        {triggerIcon}
        <span className="font-semibold">{triggerText}</span>
      </button>
    </DialogElem.Trigger>
    <DialogElem.Portal>
      <DialogElem.Overlay className="animate-overlay-show fixed inset-0 bg-black opacity-30" />
      <DialogElem.Content className="dialog-shadow animate-content-show fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-6 text-black">
        <DialogElem.Title className="mx-auto w-8/12 border-b border-black pb-1 text-center">
          {title}
        </DialogElem.Title>
        {description && (
          <DialogElem.Description className="">
            {description}
          </DialogElem.Description>
        )}
        {children}
        <DialogElem.Close asChild>
          <button
            className="absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full text-black hover:bg-gray-200"
            aria-label="Close"
          >
            <RxCross2 className="h-5 w-5" />
          </button>
        </DialogElem.Close>
      </DialogElem.Content>
    </DialogElem.Portal>
  </DialogElem.Root>
);

export default Dialog;
