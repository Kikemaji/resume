'use client';
import React from 'react';
import * as DialogElem from '@radix-ui/react-dialog';
import { RxCross2 } from 'react-icons/rx';
import styles from './Dialog.module.css';
import clsx from 'clsx';
import { addFontBoldJSX } from '@/utils/addFontBold';

interface DialogProps {
  triggerIcon?: React.ReactNode;
  triggerText: string;
  triggerClassName?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  handleClose?: () => void;
  contentClassName?: string;
}

const Dialog = ({
  triggerIcon,
  triggerText,
  triggerClassName = '',
  title,
  description,
  children,
  handleClose,
  contentClassName,
}: DialogProps) => {
  const handleCloseInside = (open: boolean) => {
    if (!open && handleClose) {
      handleClose();
    }
  };

  return (
    <DialogElem.Root onOpenChange={handleCloseInside}>
      <DialogElem.Trigger asChild>
        <button className={clsx('', triggerClassName)}>
          <span className="flex-none">{triggerIcon}</span>
          <span className="font-semibold">{triggerText}</span>
        </button>
      </DialogElem.Trigger>
      <DialogElem.Portal>
        <DialogElem.Overlay
          className={clsx(
            styles.animateOverlayShow,
            'fixed inset-0 bg-black opacity-30'
          )}
        />
        <DialogElem.Content
          className={clsx(
            styles.dialogShadow,
            styles.animateContentShow,
            contentClassName,
            'fixed left-1/2 top-1/2 max-h-[85dvh] w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-6 text-black'
          )}
        >
          <DialogElem.Title className="h3 mx-auto border-b border-black p-1 text-center md:w-8/12">
            {title}
          </DialogElem.Title>
          {description && (
            <DialogElem.Description className="my-2">
              {addFontBoldJSX(description)}
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
};

export default Dialog;
