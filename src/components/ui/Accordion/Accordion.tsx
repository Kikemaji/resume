'use client';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import * as AccordionElem from '@radix-ui/react-accordion';
import clsx from 'clsx';
import styles from './Accordion.module.css';

const Accordion = ({}) => {
  const content = [
    // {
    //   question: '¿Cuál es tu disponibilidad?',
    //   answer: 'Preaviso de 15 días',
    // },
    {
      question: '¿Estás autorizado para trabajar en la Unión Europea?',
      answer: 'Sí, soy español.',
    },
    {
      question: '¿Cuál es tu expectativa salarial?',
      answer:
        'Depende de cómo sea el trabajo y las responsabilidades que tenga. Habrá que hablarlo en la entrevista.',
    },

    {
      question: '¿Qué otros lenguajes conoces?',
      answer: 'Que sean relevantes, Java y Python',
    },
    {
      question: '¿Cuándo se actualizó esta página por última vez?',
      answer:
        'Marzo 2023. Aunque datos como la experiencia y la edad se actualizan automáticamente.',
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
          <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between gap-4 border-b border-border  px-5 py-2 text-start ">
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
