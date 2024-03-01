import SpinningText from '@/components/ui/SpinningContent/SpinningContent';
import Image from 'next/image';
import React from 'react';
import { FaCode } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse  gap-10 lg:mt-12 lg:flex-row lg:justify-around lg:gap-5 ">
      <div className="flex flex-col items-center justify-center gap-3 xl:max-w-xl">
        <h1 className="break-words text-center text-3xl font-bold lg:text-4xl xl:text-5xl">
          El ingeniero frontend{' '}
          <span className="whitespace-pre ">que necesitas</span>
        </h1>
        <h3 className="text-center text-lg lg:text-xl xl:text-2xl">
          Con código para que no tengas que mirar tantos CVs
        </h3>
        <div className="mt-4 flex w-full flex-col items-center gap-3 lg:flex-row xl:mt-8">
          <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-secondary px-3 py-1 md:w-4/6 lg:w-full">
            <FaCode />
            <span>Ver código</span>
          </button>
          <button className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-md bg-primary px-3 py-1 text-black md:w-4/6 lg:w-full">
            <span>Contacto</span>
          </button>
        </div>
      </div>
      <div className="relative flex justify-center">
        <SpinningText>
          <Image
            alt="Foto grande Enrique"
            src="/profile_photo_lg_circle.png"
            className="customShadow rounded-full md:hidden"
            width={210}
            height={210}
            priority
          />
          <Image
            alt="Foto grande Enrique"
            src="/profile_photo_lg_circle.png"
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
