'use client';
import React from 'react';
import * as SelectElem from '@radix-ui/react-select';
import clsx from 'clsx';
import './styles.css';
import { FaChevronDown } from 'react-icons/fa';
import { BiCheck } from 'react-icons/bi';

const Select = ({
  handleSelectValue,
  content,
  placeholder,
}: {
  handleSelectValue: (value: string) => void;
  content: { index: string; label: string }[];
  placeholder: string;
}) => (
  <SelectElem.Root onValueChange={handleSelectValue}>
    <SelectElem.Trigger className="inline-flex h-9 w-full max-w-64 items-center justify-between gap-1.5 rounded-md px-4 py-1 text-sm text-black outline outline-1 outline-border hover:bg-[#f7f7f7] data-[placeholder]:text-border">
      <SelectElem.Value placeholder={placeholder} />
      <SelectElem.Icon className="text-border">
        <FaChevronDown />
      </SelectElem.Icon>
    </SelectElem.Trigger>
    <SelectElem.Portal>
      <SelectElem.Content
        className="rounded-lg border border-border bg-white shadow-md"
        position={'popper'}
      >
        <SelectElem.Viewport className="w-full max-w-64 p-1.5">
          <SelectElem.Group>
            {content.map((elem) => (
              <SelectItem value={elem.index} key={elem.index}>
                {elem.label}
              </SelectItem>
            ))}
          </SelectElem.Group>
        </SelectElem.Viewport>
      </SelectElem.Content>
    </SelectElem.Portal>
  </SelectElem.Root>
);

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  value: string;
}
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <SelectElem.Item
        className={clsx(
          'relative flex select-none items-center gap-1.5 rounded-sm px-4 py-1 text-sm text-black data-[highlighted]:bg-[#e0e0e0] data-[highlighted]:outline-none',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <SelectElem.ItemText>{children}</SelectElem.ItemText>
        <SelectElem.ItemIndicator>
          <BiCheck className="h-5 w-5" />
        </SelectElem.ItemIndicator>
      </SelectElem.Item>
    );
  }
);
SelectItem.displayName = 'SelectItem';
export default Select;
