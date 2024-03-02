import Image from 'next/image';
import React from 'react';

const CreatedSection = () => {
  return (
    <section className="my-8 text-gray-400">
      <h4 className="md:text-center lg:text-start lg:text-lg xl:text-xl">
        Web creada con:
      </h4>
      <div className="mt-1 flex items-end gap-4 text-xs md:mt-4 md:justify-center md:gap-16 md:text-base lg:justify-normal">
        <div>
          <Image
            className="mx-auto w-8 invert md:w-10"
            alt="NextJS icon"
            src="/next.svg"
            width={24}
            height={24}
          />
          <span>Next.js</span>
        </div>
        <div>
          <Image
            className="mx-auto w-8 md:w-10"
            alt="ReactJS icon"
            src="/react.svg"
            width={24}
            height={24}
          />
          <span>React.js</span>
        </div>
        <div>
          <Image
            className="mx-auto w-8 md:w-10"
            alt="Typescript icon"
            src="/typescript.svg"
            width={24}
            height={24}
          />
          <span>Typescript</span>
        </div>
        <div>
          <Image
            className="mx-auto w-8 md:w-10"
            alt="Tailwind CSS icon"
            src="/tailwind.svg"
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
