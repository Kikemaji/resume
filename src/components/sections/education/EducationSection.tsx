import Image from 'next/image';
import React from 'react';
import styles from './Education.module.css';
import clsx from 'clsx';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';

const EducationSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="my-16 lg:my-24">
      <h2 className="h2 mb-4 text-center font-bold lg:text-center">
        {getTranslation(dictionary, ['educationSection', 'title'])}
      </h2>
      <div className="flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:justify-center">
        <div className={clsx(styles.card, 'bg-secondary')}>
          <h3 className=" h3 mb-2 font-bold md:mb-0">
            {getTranslation(dictionary, ['educationSection', 'card1', 'title'])}
          </h3>
          <div className="flex flex-1 items-center gap-2 md:flex-auto">
            <Image
              className="m-auto w-12"
              alt="URJC logo"
              src="/icons/URJC.svg"
              width={24}
              height={24}
            />
            <div>
              <p>
                {getTranslation(dictionary, ['educationSection', 'card1', '1'])}
              </p>
              <p>
                {getTranslation(dictionary, ['educationSection', 'card1', '2'])}
              </p>
            </div>
          </div>
        </div>
        <div className={clsx(styles.card, 'bg-secondary')}>
          <h3 className="h3 mb-2 font-bold md:mb-0">
            {getTranslation(dictionary, ['educationSection', 'card2', 'title'])}
          </h3>
          <ul>
            <li>
              <span className="font-bold">
                {' '}
                {getTranslation(dictionary, [
                  'educationSection',
                  'card2',
                  '11',
                ])}
              </span>
              {getTranslation(dictionary, ['educationSection', 'card2', '12'])}
            </li>
            <li>
              <span className="font-bold">
                {getTranslation(dictionary, [
                  'educationSection',
                  'card2',
                  '21',
                ])}
              </span>
              {getTranslation(dictionary, ['educationSection', 'card2', '22'])}
            </li>
            <li>
              <span className="font-bold">
                {getTranslation(dictionary, [
                  'educationSection',
                  'card2',
                  '31',
                ])}
              </span>{' '}
              {getTranslation(dictionary, ['educationSection', 'card2', '32'])}
            </li>
            <li>
              {getTranslation(dictionary, ['educationSection', 'card2', '41'])}
              <span className="font-bold">
                {getTranslation(dictionary, [
                  'educationSection',
                  'card2',
                  '42',
                ])}
              </span>
            </li>
          </ul>
        </div>

        <div className={clsx(styles.flipCard, 'hidden xl:block')}>
          <div className={clsx(styles.flipCardContent, styles.flipCardFront)}>
            ?
          </div>
          <div className={clsx(styles.flipCardContent, styles.flipCardBack)}>
            Más o pido feedback? / 2 opciones. Te gusta? Llámame, que no? haz
            scroll y dame feedback al final
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
