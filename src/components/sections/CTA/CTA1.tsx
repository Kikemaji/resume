import React from 'react';
import styles from './CTA1.module.css';
import clsx from 'clsx';

const CTA1 = () => {
  return (
    <section className="relative my-8 gap-2 py-16 text-center text-white">
      <h2
        className={clsx(styles.gradientText, 'text-center text-2xl font-bold')}
      >
        Como bien dicen las ofertas de trabajo:
      </h2>
      <p>No tienes por qué cumplir todos los requisitos.</p>
      <p>Si crees que tienes una buena oferta...</p>
      <div className={styles.animatedBorderBox}>
        <button className=" px-3 py-2 font-bold transition-colors hover:bg-white hover:text-black">
          Háblame :&#41;
        </button>
      </div>
    </section>
  );
};

export default CTA1;
