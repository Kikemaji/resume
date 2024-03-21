import React from 'react';
import styles from './CTA1.module.css';
import clsx from 'clsx';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';

const CTA1 = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="relative my-32 gap-2 text-center text-white">
      <h2 className={clsx(styles.gradientText, 'h2 text-center font-bold')}>
        {getTranslation(dictionary, ['CTA1Section', 'title'])}
      </h2>
      <p>{getTranslation(dictionary, ['CTA1Section', '1'])}</p>
      <p>{getTranslation(dictionary, ['CTA1Section', '2'])}</p>
      <div className={styles.animatedBorderBox}>
        <button className=" px-3 py-2 font-bold transition-colors hover:bg-white hover:text-black">
          {getTranslation(dictionary, ['CTA1Section', 'button'])}
        </button>
      </div>
    </section>
  );
};

export default CTA1;
