import SpinningText from '@/components/ui/SpinningContent/SpinningContent';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';
import Image from 'next/image';
import React from 'react';
import { FaCode } from 'react-icons/fa6';

const HeroSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="flex flex-col-reverse  gap-10 lg:mt-12 lg:flex-row lg:justify-around lg:gap-5 ">
      <div className="flex flex-col items-center justify-center gap-3 xl:max-w-xl">
        <h1 className="h1 break-words text-center font-bold ">
          {getTranslation(dictionary, ['heroSection', 'title', '1'])}{' '}
          <span className="whitespace-pre ">
            {getTranslation(dictionary, ['heroSection', 'title', '2'])}
          </span>
        </h1>
        <h3 className="h3 text-center">
          {getTranslation(dictionary, ['heroSection', 'subtitle'])}
        </h3>
        <div className="mt-4 flex w-full flex-col items-center gap-3 lg:flex-row xl:mt-8">
          <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-secondary px-3 py-1 md:w-4/6 lg:w-full">
            <FaCode />
            <span>
              {getTranslation(dictionary, ['heroSection', 'buttons', 'code'])}
            </span>
          </button>
          <button className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-md bg-primary px-3 py-1 text-black md:w-4/6 lg:w-full">
            <span>
              {getTranslation(dictionary, [
                'heroSection',
                'buttons',
                'contact',
              ])}
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex justify-center">
        <SpinningText>
          <Image
            alt="Foto grande Enrique"
            src="/photos/profile_photo_lg_circle.png"
            className="customShadow rounded-full md:hidden"
            width={210}
            height={210}
            priority
          />
          <Image
            alt="Foto grande Enrique"
            src="/photos/profile_photo_lg_circle.png"
            className="customShadow hidden rounded-full md:block"
            width={310}
            height={310}
            priority
          />
        </SpinningText>
      </div>
    </section>
  );
};

export default HeroSection;
