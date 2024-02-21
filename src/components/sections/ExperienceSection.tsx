'use client';
import React, { useState } from 'react';
import Dialog from '@/components/ui/Dialog/Dialog';
import Select from '@/components/ui/Select/Select';
import { FaPlus } from 'react-icons/fa6';

const comienzoAprox = new Date(2022, 7, 12).getTime();
const ahora = new Date().getTime();
const diferenciaEnMilisegundos = ahora - comienzoAprox;
const anosDeExperiencia = Math.floor(
  diferenciaEnMilisegundos / (365.25 * 24 * 60 * 60 * 1000)
);
const mesasDeExperiencia = Math.floor(
  (diferenciaEnMilisegundos % (365.25 * 24 * 60 * 60 * 1000)) /
    (30.44 * 24 * 60 * 60 * 1000)
);

const selectContent = [
  { index: '0', label: 'Tecnología usada' },
  { index: '1', label: 'Proyecto destacable - Elecciones argentinas' },
  {
    index: '2',
    label: 'Proyecto destacable - Elecciones autonómicas españolas',
  },
];

const ArgPoints = [
  'Rediseño completo de la aplicación de captura y monitorización de votos en React.',
  'Resolución de más de 100 incidencias para actualizar app antigua a la nueva versión.',
  'Implementación de nuevas funcionalidades en un código de alta complejidad.',
  'Creación de una aplicación de gestión de usuarios usando Next 13 (Api routes, server components) conectado a freeipa',
];

export const ExperienceSection = () => {
  const [value, setValue] = useState('-1');
  const handleSelectValue = (val: string) => {
    setValue(val);
  };

  return (
    <section className="my-8 flex flex-col gap-2">
      <h2 className="text-center text-xl font-bold">
        {anosDeExperiencia} {anosDeExperiencia > 1 ? 'años' : 'año'} y{' '}
        {mesasDeExperiencia} {mesasDeExperiencia === 1 ? 'mes' : 'meses'} de
        experiencia
      </h2>
      <Dialog
        triggerIcon={<FaPlus className="h-5 w-5" />}
        triggerText="Software de las elecciones - 1 año y 2 meses"
        title="Ingeniero frontend - Minsait"
        description="Desarrollando el software de las elecciones Españolas y Latinoamericanas"
      >
        <Select handleSelectValue={handleSelectValue} content={selectContent} />
        <div className="max-h-[50dvh] min-h-[30dvh] overflow-y-scroll">
          {value === '0' && <Skills />}
          {value === '1' && <Project descriptions={ArgPoints} />}
          {value === '2' && <span>1 elegido!</span>}
        </div>
      </Dialog>
      <Dialog
        triggerIcon={<FaPlus className="h-5 w-5" />}
        triggerText="Fullstack becario - 4 meses"
        title="Fullstack developer"
      >
        asdf{' '}
      </Dialog>
      <Dialog
        triggerIcon={<FaPlus className="h-5 w-5" />}
        triggerText="Enseñando a estudiar - Autónomo"
        triggerClassName="!bg-gray-300"
        title="Autónomo"
      >
        asdf{' '}
      </Dialog>
    </section>
  );
};

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Lenguajes/frameworks:',
      skills: [
        'JavaScript/TypeScript',
        'React.js',
        'Next.js(v.13+)',
        'CSS3',
        'Tailwind',
        'HTML5',
      ],
    },
    {
      title: 'Herramientas:',
      skills: [
        'Git',
        'Postman',
        'Mockoon',
        'NVM',
        'Figma (desarrollador)',
        'VS Code',
      ],
    },
    {
      title: 'Librerías:',
      skills: [
        'eCharts',
        'axios',
        'SWR',
        'framer motion',
        'react-hook-forms',
        'react-select',
        'tanstack table',
        'clsx',
        'styled components',
        'class variance authority',
        'radix',
        'i18n',
      ],
    },
  ];

  return (
    <div className="mt-2 flex max-h-[400px] flex-col flex-wrap p-2">
      {categories.map((category, index) => (
        <SkillList
          key={index}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </div>
  );
};
interface SkillListProps {
  title: string;
  skills: string[];
}
const SkillList = ({ title, skills }: SkillListProps) => (
  <div>
    <p className="font-bold">{title}</p>
    <ul className="list-disc px-5">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

interface ProjectProps {
  descriptions: string[];
}

const Project: React.FC<ProjectProps> = ({ descriptions }) => (
  <div className="mt-2">
    <p className="font-bold">Partes destacables:</p>
    <ul className="list-disc px-5">
      {descriptions.map((description, index) => (
        <li key={index}>{description}</li>
      ))}
    </ul>
  </div>
);
