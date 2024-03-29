import clsx from 'clsx';
import React from 'react';
import { FaHeart } from 'react-icons/fa6';
import styles from './Quality.module.css';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';
import Link from 'next/link';

const QualitySection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="my-12 text-gray-400">
      <h4 className="h4 md:text-center lg:text-start">
        {getTranslation(dictionary, ['qualitySection', 'title'])}
      </h4>
      <div className="mt-1 flex items-end gap-4  md:justify-center md:gap-16 lg:justify-normal">
        <div className="flex items-center gap-1">
          <span className="text-xs md:text-base">ESLint</span>
        </div>
        <div
          className="
            text-center text-xs md:text-base"
        >
          {/* <p>{getTranslation(dictionary, ['qualitySection', 'principles'])}</p> */}
          <span>{getTranslation(dictionary, ['qualitySection', 'solid'])}</span>
        </div>
        <div>Sonnar</div>
        <div className="text-xs md:text-base">
          <p>{getTranslation(dictionary, ['qualitySection', 'byYou'])}</p>
          <p className="flex items-center gap-2">
            <Link
              href="https://github.com/Kikemaji/resume"
              target="_blank"
              className="underline transition-transform hover:scale-95"
            >
              {getTranslation(dictionary, ['qualitySection', 'repoLove'])}
            </Link>
            <FaHeart
              className={clsx(styles.animateHeartPulse, 'text-red-500')}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
