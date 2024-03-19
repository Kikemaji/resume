import Accordion from '@/components/ui/Accordion/Accordion';
import React from 'react';

const FAQSection = () => {
  return (
    <section className="my-8 flex flex-col items-center gap-4">
      <h2 className="h2 font-bold">Preguntas frecuentes</h2>
      <Accordion />
    </section>
  );
};

export default FAQSection;
