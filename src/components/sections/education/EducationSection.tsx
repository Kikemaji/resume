import Image from 'next/image';
import React from 'react';
import styles from './Education.module.css';
import clsx from 'clsx';

const EducationSection = () => {
  return (
    <section className="my-8">
      <h2 className="mb-4 text-center text-xl font-bold md:text-end lg:text-center">
        ¿Con ganas de más?
      </h2>
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:flex-wrap lg:justify-center">
        <div className={clsx(styles.card, 'bg-secondary md:ml-auto lg:ml-0')}>
          <h3 className=" mb-2 text-lg font-bold md:mb-0">
            Doble Grado Universitario
          </h3>
          <div className="flex flex-1 items-center gap-2 md:flex-auto">
            <Image
              className="m-auto w-12"
              alt="URJC logo"
              src="/URJC.svg"
              width={24}
              height={24}
            />
            <div>
              <p>Ingeniería Informática</p>
              <p>Ingeniería del Software</p>
            </div>
          </div>
        </div>
        <div className={clsx(styles.card, 'bg-secondary')}>
          <h3 className="mb-2 text-lg font-bold md:mb-0">Cuatro idiomas</h3>
          <ul>
            <li>
              <span className="font-bold"> C1 Inglés</span>: mayor nivel
              demostrable.
            </li>
            <li>
              <span className="font-bold">C1 Francés</span>: un poco oxidado.
            </li>
            <li>
              <span className="font-bold">Español</span> nativo
            </li>
            <li>
              2 años de clases de <span className="font-bold">japonés</span>
            </li>
          </ul>
        </div>
        <div
          className={clsx(
            styles.card,
            'border border-border md:mr-auto lg:mr-0'
          )}
        >
          <p>Efecto chulo</p>
          <span>Hacer algo (esconder en movil)</span>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
