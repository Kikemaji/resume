'use client';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import * as AccordionElem from '@radix-ui/react-accordion';
import clsx from 'clsx';
import styles from './Accordion.module.css';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';

const Accordion = ({ dictionary }: { dictionary: Dictionary }) => {
  const content = [
    // {
    //   question: '¿Cuál es tu disponibilidad?',
    //   answer: 'Preaviso de 15 días',
    // },
    {
      question: getTranslation(dictionary, ['FAQSection', 'Q1']),
      answer: getTranslation(dictionary, ['FAQSection', 'A1']),
    },
    {
      question: getTranslation(dictionary, ['FAQSection', 'Q2']),
      answer: getTranslation(dictionary, ['FAQSection', 'A2']),
    },

    {
      question: getTranslation(dictionary, ['FAQSection', 'Q3']),
      answer: getTranslation(dictionary, ['FAQSection', 'A3']),
    },
    {
      question: getTranslation(dictionary, ['FAQSection', 'Q4']),
      answer: getTranslation(dictionary, ['FAQSection', 'A4']),
    },
  ];

  return (
    <AccordionElem.Root
      className="w-full rounded-md xl:max-w-[1024px] "
      type="single"
      defaultValue=""
      collapsible
    >
      {content.map((element, index) => (
        <AccordionElem.Item key={index} value={`item-${index}`}>
          <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between gap-4 border-b border-border px-5 py-2 text-start transition-colors hover:bg-gray-800">
            {element.question}
          </AccordionTrigger>
          <AccordionContent className={' bg-white text-black'}>
            {element.answer}
          </AccordionContent>
        </AccordionElem.Item>
      ))}
    </AccordionElem.Root>
  );
};

export default Accordion;

interface AccordionTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionElem.Header>
    <AccordionElem.Trigger
      className={clsx(styles.AccordionTrigger, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <FaChevronDown className={clsx(styles.AccordionChevron)} aria-hidden />
    </AccordionElem.Trigger>
  </AccordionElem.Header>
));

AccordionTrigger.displayName = 'AccordionTrigger';

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionElem.Content
    className={clsx(styles.AccordionContent, className)}
    {...props}
    ref={forwardedRef}
  >
    <div className={styles.AccordionContentText}>{children}</div>
  </AccordionElem.Content>
));

AccordionContent.displayName = 'AccordionContent';
