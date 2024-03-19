import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa6';
import styles from './Quality.module.css';

const QualitySection = () => {
  return (
    <div className="my-8 text-gray-400">
      <h4 className="  md:text-center lg:text-start lg:text-lg xl:text-xl">
        Calidad asegurada por:
      </h4>
      <div className="mt-1 flex items-end gap-4 md:mt-4 md:justify-center md:gap-16 lg:justify-normal">
        <div className="flex flex-col gap-1">
          <Image
            className=""
            alt="ESLint icon"
            src="/icons/eslint.svg"
            width={24}
            height={21}
          />
          <span className="text-xs md:text-base">ESLint</span>
        </div>
        <div
          className="
            text-center text-xs md:text-base"
        >
          <p>Principios</p>SOLID
        </div>
        {/* <div>¿Sonnar?</div> */}
        <div className="text-xs md:text-base">
          <p>¿Por ti?</p>
          <p className="flex items-center gap-2">
            <a href="" className="underline">
              Dale amor al repo
            </a>
            <FaHeart
              className={clsx(styles.animateHeartPulse, 'text-red-500')}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
