import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';
import Image from 'next/image';
import React from 'react';

const CreatedSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="my-8 text-gray-400">
      <h4 className="h4 md:text-center">
        {getTranslation(dictionary, ['createdSection', 'title'])}
      </h4>
      <div className="mt-1 flex items-end gap-4 text-xs md:mt-4 md:justify-center md:gap-16 md:text-base">
        <div>
          <Image
            className="mx-auto w-8 invert md:w-10"
            alt={getTranslation(dictionary, ['icons', 'next'])}
            src="/icons/next.svg"
            width={24}
            height={24}
          />
          <span>Next.js</span>
        </div>
        <div>
          <Image
            className="mx-auto w-8 md:w-10"
            alt={getTranslation(dictionary, ['icons', 'react'])}
            src="/icons/react.svg"
            width={24}
            height={24}
          />
          <span>React.js</span>
        </div>
        <div>
          <Image
            className="mx-auto w-8 md:w-10"
            alt={getTranslation(dictionary, ['icons', 'typescript'])}
            src="/icons/typescript.svg"
            width={24}
            height={24}
          />
          <span>Typescript</span>
        </div>
        <div>
          <Image
            className="mx-auto w-8 md:w-10"
            alt={getTranslation(dictionary, ['icons', 'tailwind'])}
            src="/icons/tailwind.svg"
            width={40}
            height={24}
          />
          <span className="text-nowrap">Tailwind CSS</span>
        </div>
        <div>
          Server Side <span className="block">Rendering</span>
        </div>
      </div>
    </section>
  );
};

export default CreatedSection;
