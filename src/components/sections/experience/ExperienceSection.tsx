'use client';
import React, { useState } from 'react';
import Dialog from '@/components/ui/Dialog/Dialog';
import Select from '@/components/ui/Select/Select';
import { FaPlus } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import clsx from 'clsx';
import { addFontBoldJSX } from '@/utils/addFontBold';
import { Link, Skill, SkillCategory } from './types';
import * as data from './text';

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

const ExperienceSection = () => {
  const [value, setValue] = useState('-1');
  const handleSelectValue = (val: string) => {
    setValue(val);
  };

  const resetSelect = () => {
    setValue('-1');
  };

  return (
    <section className="mb-16 mt-8 flex flex-col gap-2 lg:my-24">
      <h2 className="text-center text-xl font-bold">
        {anosDeExperiencia} {anosDeExperiencia > 1 ? 'años' : 'año'} y{' '}
        {mesasDeExperiencia} {mesasDeExperiencia === 1 ? 'mes' : 'meses'} de
        experiencia
      </h2>
      <Dialog
        triggerIcon={<FaPlus className="h-5 w-5" />}
        triggerText="Software de las elecciones - 1 año y 3 meses"
        title="Ingeniero frontend - Minsait"
        description="Desarrollando el *software de las elecciones* Españolas y Latinoamericanas"
        handleClose={resetSelect}
      >
        <Select
          placeholder="¿Qué quieres saber?"
          handleSelectValue={handleSelectValue}
          content={data.selectContent}
        />
        <div className="max-h-[50dvh] min-h-[30dvh] overflow-y-scroll">
          {value === '-1' && (
            <div className="grid h-[400px] place-items-center text-xl">
              Elige una opción
            </div>
          )}
          {value === '0' && <Skills categories={data.categories} />}
          {value === '1' && <Project descriptions={data.argPoints} />}
          {value === '2' && (
            <Project descriptions={data.esPoints} links={data.esLinks} />
          )}
        </div>
      </Dialog>
      <Dialog
        triggerIcon={<FaPlus className="h-5 w-5" />}
        triggerText="Fullstack becario - 4 meses"
        title="Beca Fullstack developer - UST Global"
        description="Desarrollando una plataforma de RRHH, frontend y backend."
        handleClose={resetSelect}
      >
        <Select
          placeholder="¿Qué quieres saber?"
          handleSelectValue={handleSelectValue}
          content={data.selectContent2}
        />
        <div className="max-h-[50dvh] min-h-[30dvh] overflow-y-scroll">
          {value === '-1' && (
            <div className="grid h-[400px] place-items-center text-xl">
              Elige una opción
            </div>
          )}
          {value === '0' && <Skills categories={data.categories2} />}
          {value === '1' && <Project descriptions={data.ustPoints} />}
        </div>
      </Dialog>
      <Dialog
        triggerIcon={<FaPlus className="h-5 w-5" />}
        triggerText="Enseñando a estudiar - Autónomo"
        triggerClassName="!bg-gray-300"
        title="Autónomo / Profesor de productividad"
        description="Enseñando a estudiar de forma eficiente"
        handleClose={resetSelect}
      >
        <Select
          placeholder="¿Qué quieres saber?"
          handleSelectValue={handleSelectValue}
          content={data.selectContent3}
        />
        <div className="max-h-[50dvh] min-h-[30dvh] overflow-y-scroll">
          {value === '-1' && (
            <div className="grid h-[400px] place-items-center text-xl">
              Elige una opción
            </div>
          )}
          {value === '0' && <Skills categories={data.categories3_1} />}
          {value === '1' && <Skills categories={data.categories3_2} />}
          {value === '2' && (
            <div>
              Libro organización, 500k seguidores, Habilidades poco comunes
              (pereza, concentración y organización)
            </div>
          )}
        </div>
      </Dialog>
    </section>
  );
};

const Skills = ({ categories }: { categories: SkillCategory[] }) => {
  return (
    <div className="mt-2 flex max-h-[400px] flex-col gap-2 p-2 md:flex-wrap">
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
  skills: Skill[];
}
const SkillList = ({ title, skills }: SkillListProps) => (
  <div>
    <p className="font-bold">{title}</p>
    <ul className="list-disc px-5">
      {skills.map((skill, index) => (
        <li key={index}>
          <span className={clsx(skill.highlighted && 'font-bold text-accent')}>
            {skill.name}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

interface ProjectProps {
  descriptions: string[];
  links?: Link[];
}

const Project: React.FC<ProjectProps> = ({ descriptions, links }) => (
  <div className="mt-2">
    <p className="font-bold">Partes destacables:</p>
    <ul className="list-disc px-5">
      {descriptions.map((description, index) => (
        <li key={index}>{addFontBoldJSX(description)}</li>
      ))}
      {links?.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-400 underline"
          >
            {link.name}
            <FaExternalLinkAlt />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceSection;
