import React from 'react';
import { FaCircleNodes } from 'react-icons/fa6';
import { GiCrystalGrowth } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import styles from './WhyMe.module.css';
import clsx from 'clsx';

const WhyMeSection = () => {
  return (
    <section className="my-8">
      <h2 className="mb-4 text-center text-xl font-bold">
        ¿Por qué elegirme a mí?
      </h2>
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:flex-wrap lg:justify-center">
        <div className={clsx(styles.card, 'md:mr-auto lg:mr-0')}>
          <RiTeamFill className={clsx(styles.icon, 'flex-shrink-0')} />
          <div>
            <h4 className="text-lg font-semibold">Team Player</h4>
            <p>Empático, sociable y optimista.</p>
            <p>Siempre con una sonrisa.</p>
          </div>
        </div>
        <div className={clsx(styles.card)}>
          <GiCrystalGrowth className={clsx(styles.icon, ' flex-shrink-0 ')} />
          <div>
            <h4 className="text-lg font-semibold ">Growth Mindset</h4>
            <p>Me encanta lo difícil </p>
            <p>Soy super curioso </p>
          </div>
        </div>
        <div className={clsx(styles.card, 'md:ml-auto lg:ml-0')}>
          <FaCircleNodes className={clsx(styles.icon, 'flex-shrink-0')} />
          <div>
            <h4 className="text-lg font-semibold">Autocrítico</h4>
            <p>Reconozco mis errores</p>
            <p>Busco respuestas sin miedo a preguntar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
