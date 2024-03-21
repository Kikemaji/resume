import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa6';
import styles from './Quality.module.css';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';

const QualitySection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className="my-12 text-gray-400">
      <h4 className="h4 md:text-center lg:text-start">
        {getTranslation(dictionary, ['qualitySection', 'title'])}
      </h4>
      <div className="mt-1 flex items-end gap-4 md:mt-4 md:justify-center md:gap-16 lg:justify-normal">
        <div className="flex flex-col gap-1">
          <Image
            className=""
            alt={getTranslation(dictionary, ['icons', 'eslint'])}
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
          {/* <p>{getTranslation(dictionary, ['qualitySection', 'principles'])}</p> */}
          <span>{getTranslation(dictionary, ['qualitySection', 'solid'])}</span>
        </div>
        {/* <div>¿Sonnar?</div> */}
        <div className="text-xs md:text-base">
          <p>{getTranslation(dictionary, ['qualitySection', 'byYou'])}</p>
          <p className="flex items-center gap-2">
            <a
              href=""
              className="underline transition-transform hover:scale-95"
            >
              {getTranslation(dictionary, ['qualitySection', 'repoLove'])}
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
