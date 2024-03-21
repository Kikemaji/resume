import Accordion from '@/components/ui/Accordion/Accordion';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';
import React from 'react';

const FAQSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="my-8 flex flex-col items-center gap-4">
      <h2 className="h2 font-bold">
        {getTranslation(dictionary, ['heroSection', 'title'])}
      </h2>
      <Accordion dictionary={dictionary} />
    </section>
  );
};

export default FAQSection;
