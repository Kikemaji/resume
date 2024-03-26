import React from 'react';
import { FaCircleNodes } from 'react-icons/fa6';
import { GiCrystalGrowth } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import styles from './WhyMe.module.css';
import clsx from 'clsx';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';

const WhyMeSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="my-16 lg:my-24">
      <h2 className="h2 mb-4 text-center font-bold md:text-start lg:text-center">
        {getTranslation(dictionary, ['whyMeSection', 'title'])}
      </h2>
      <ul className="flex flex-col items-center gap-2 lg:flex-row lg:flex-wrap lg:justify-center">
        <li className={clsx(styles.card, 'md:mr-auto lg:mr-0')}>
          <RiTeamFill className={clsx(styles.icon, 'flex-shrink-0')} />
          <section>
            <h3 className="h3 font-semibold">
              {getTranslation(dictionary, ['whyMeSection', 'card1', 'title'])}
            </h3>
            <p>{getTranslation(dictionary, ['whyMeSection', 'card1', '1'])}</p>
            <p>{getTranslation(dictionary, ['whyMeSection', 'card1', '2'])}</p>
          </section>
        </li>
        <li className={clsx(styles.card)}>
          <GiCrystalGrowth className={clsx(styles.icon, ' flex-shrink-0 ')} />
          <section>
            <h3 className="h3 font-semibold ">
              {getTranslation(dictionary, ['whyMeSection', 'card2', 'title'])}
            </h3>
            <p>{getTranslation(dictionary, ['whyMeSection', 'card2', '1'])}</p>
            <p>{getTranslation(dictionary, ['whyMeSection', 'card2', '2'])}</p>
          </section>
        </li>
        <li className={clsx(styles.card, 'md:ml-auto lg:ml-0')}>
          <FaCircleNodes className={clsx(styles.icon, 'flex-shrink-0')} />
          <section>
            <h3 className="h3 font-semibold">
              {getTranslation(dictionary, ['whyMeSection', 'card3', 'title'])}
            </h3>
            <p>{getTranslation(dictionary, ['whyMeSection', 'card3', '1'])}</p>
            <p>{getTranslation(dictionary, ['whyMeSection', 'card3', '2'])}</p>
          </section>
        </li>
      </ul>
    </section>
  );
};

export default WhyMeSection;
