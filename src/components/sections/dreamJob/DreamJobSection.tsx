import clsx from 'clsx';
import React from 'react';
import { FaArrowDown, FaCheck } from 'react-icons/fa';

const DreamJobSection = () => {
  const trabajoIdealContent = [
    'Didáctico',
    'Entretenido',
    'Con buen ambiente',
    'Equilibrio vida / trabajo',
    'Buen sueldo y posibilidad de subirlo',
  ];

  const trabajoIdealExamples = [
    'Reviews de código',
    'Comunicación',
    'Buenas prácticas',
    'Diferentes frameworks/proyectos',
    'Testing',
    'Remoto',
    'Sin horas extra',
    'Agile',
    'Buenos compañeros',
    'Aprender backend',
    'Revisiones salariales',
  ];
  return (
    <section className="my-8 flex flex-col gap-4">
      <h2 className="text-center text-xl font-bold">
        ¿Cómo es mi trabajo ideal?
      </h2>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <ul className="text-lg md:w-[30%] ">
          {trabajoIdealContent.map((text) => (
            <li key={text} className="flex items-center gap-2.5">
              <FaCheck />
              {text}
            </li>
          ))}
        </ul>
        <FaArrowDown className=" h-12 w-12 md:w-[20%] md:-rotate-90" />

        <div className="flex flex-wrap justify-around gap-2 md:w-[50%]">
          {trabajoIdealExamples.map((text) => (
            <Label key={text} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamJobSection;

const Label = ({ text }: { text: string }) => {
  const randomColor = Math.floor(Math.random() * 3);
  return (
    <div
      className={clsx(
        'rounded-md p-1 shadow-md',
        randomColor === 0 && 'shadow-green-600',
        randomColor === 1 && 'shadow-pink-600',
        randomColor === 2 && 'shadow-blue-600'
      )}
    >
      {text}
    </div>
  );
};
