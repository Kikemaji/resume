'use client';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import * as AccordionElem from '@radix-ui/react-accordion';

const Accordion = ({}) => {
  const content = [
    {
      question: '¿Cuál es tu disponibilidad? ',
      answer:
        'Preaviso de 15 días. Si quieres saber por qué me quiero ir de mi trabajo actual, lo podemos hablar en la entrevista ;)',
    },
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
      answer: 'Que sean relevantes Java y Python',
    },
    {
      question: '¿Cuándo se actualizó esta página por última vez?',
      answer:
        'Marzo 2023. Aunque datos como la experiencia y la edad se actualizan automáticamente.',
    },
  ];

  return (
    <AccordionElem.Root
      className="AccordionRoot"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {content.map((element, index) => (
        <AccordionElem.Item key={index} value={`item-${index}`}>
          <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between gap-4 border-b border-border bg-white p-2 text-start text-black">
            {element.question}
          </AccordionTrigger>
          <AccordionContent className="border-x border-border p-2  last:rounded-b-sm last:border-b">
            {element.answer}
          </AccordionContent>
        </AccordionElem.Item>
      ))}
    </AccordionElem.Root>
  );
};

export default Accordion;

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionElem.Header>
    <AccordionElem.Trigger
      className={`${className}`} //FIXME: Add classnames o clsx
      {...props}
      ref={forwardedRef}
    >
      {children}
      <FaChevronDown aria-hidden />
    </AccordionElem.Trigger>
  </AccordionElem.Header>
));

AccordionTrigger.displayName = 'AccordionTrigger';

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionElem.Content
    className={`${className}`}
    {...props}
    ref={forwardedRef}
  >
    <div>{children}</div>
  </AccordionElem.Content>
));

AccordionContent.displayName = 'AccordionContent';
