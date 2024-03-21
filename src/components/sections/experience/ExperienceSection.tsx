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
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';

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

const ExperienceSection = ({ dictionary }: { dictionary: Dictionary }) => {
  const [value, setValue] = useState('-1');
  const handleSelectValue = (val: string) => {
    setValue(val);
  };

  const resetSelect = () => {
    setValue('-1');
  };

  return (
    <section className="mb-16 mt-8 flex flex-col gap-2 lg:my-24">
      <h2 className="h2 text-center font-bold">
        {anosDeExperiencia} {anosDeExperiencia > 1 ? 'años' : 'año'}{' '}
        {getTranslation(dictionary, ['y'])} {mesasDeExperiencia}{' '}
        {mesasDeExperiencia === 1 ? 'mes' : 'meses'}{' '}
        {getTranslation(dictionary, ['experienceSection', 'ofExperience'])}
      </h2>
      <Dialog
        triggerIcon={<FaPlus className="h-5 w-5" />}
        triggerText={getTranslation(dictionary, [
          'experienceSection',
          'experience3',
          'triggerText',
        ])}
        triggerClassName=""
        title={getTranslation(dictionary, [
          'experienceSection',
          'experience3',
          'title',
        ])}
        description={getTranslation(dictionary, [
          'experienceSection',
          'experience3',
          'description',
        ])}
        handleClose={resetSelect}
      >
        <Select
          placeholder={getTranslation(dictionary, [
            'experienceSection',
            'select',
            'placeholder',
          ])}
          handleSelectValue={handleSelectValue}
          content={data.selectContent}
          dictionary={dictionary}
        />
        <div className="max-h-[50dvh] min-h-[30dvh] overflow-y-scroll">
          {value === '-1' && (
            <div className="grid h-[400px] place-items-center text-xl">
              {getTranslation(dictionary, ['experienceSection', 'choseOption'])}
            </div>
          )}
          {value === '0' && (
            <Skills categories={data.categories} dictionary={dictionary} />
          )}
          {value === '1' && (
            <Project descriptions={data.argPoints} dictionary={dictionary} />
          )}
          {value === '2' && (
            <Project
              descriptions={data.esPoints}
              links={data.esLinks}
              dictionary={dictionary}
            />
          )}
        </div>
      </Dialog>
      <Dialog
        triggerIcon={<FaPlus className="h-5 w-5" />}
        triggerText={getTranslation(dictionary, [
          'experienceSection',
          'experience2',
          'triggerText',
        ])}
        triggerClassName=""
        title={getTranslation(dictionary, [
          'experienceSection',
          'experience2',
          'title',
        ])}
        description={getTranslation(dictionary, [
          'experienceSection',
          'experience2',
          'description',
        ])}
        handleClose={resetSelect}
      >
        <Select
          placeholder={getTranslation(dictionary, [
            'experienceSection',
            'select',
            'placeholder',
          ])}
          handleSelectValue={handleSelectValue}
          content={data.selectContent2}
          dictionary={dictionary}
        />
        <div className="max-h-[50dvh] min-h-[30dvh] overflow-y-scroll">
          {value === '-1' && (
            <div className="grid h-[400px] place-items-center text-xl">
              {getTranslation(dictionary, ['experienceSection', 'choseOption'])}
            </div>
          )}
          {value === '0' && (
            <Skills categories={data.categories2} dictionary={dictionary} />
          )}
          {value === '1' && (
            <Project descriptions={data.ustPoints} dictionary={dictionary} />
          )}
        </div>
      </Dialog>
      <Dialog
        triggerIcon={<FaPlus className="h-5 w-5" />}
        triggerText={getTranslation(dictionary, [
          'experienceSection',
          'experience1',
          'triggerText',
        ])}
        triggerClassName=""
        title={getTranslation(dictionary, [
          'experienceSection',
          'experience1',
          'title',
        ])}
        description={getTranslation(dictionary, [
          'experienceSection',
          'experience1',
          'description',
        ])}
        handleClose={resetSelect}
      >
        <Select
          placeholder={getTranslation(dictionary, [
            'experienceSection',
            'select',
            'placeholder',
          ])}
          handleSelectValue={handleSelectValue}
          content={data.selectContent3}
          dictionary={dictionary}
        />
        <div className="max-h-[50dvh] min-h-[30dvh] overflow-y-scroll">
          {value === '-1' && (
            <div className="grid h-[400px] place-items-center text-xl">
              {getTranslation(dictionary, ['experienceSection', 'choseOption'])}
            </div>
          )}
          {value === '0' && (
            <Skills categories={data.categories3_1} dictionary={dictionary} />
          )}
          {value === '1' && (
            <Skills categories={data.categories3_2} dictionary={dictionary} />
          )}
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

const Skills = ({
  categories,
  dictionary,
}: {
  categories: SkillCategory[];
  dictionary: Dictionary;
}) => {
  return (
    <div className="mt-2 flex max-h-[400px] flex-col gap-2 p-2 md:flex-wrap">
      {categories.map((category, index) => (
        <SkillList
          key={index}
          title={category.title}
          skills={category.skills}
          dictionary={dictionary}
        />
      ))}
    </div>
  );
};

interface SkillListProps {
  title: string;
  skills: Skill[];
  dictionary: Dictionary;
}
const SkillList = ({ title, skills, dictionary }: SkillListProps) => (
  <div>
    <p className="font-bold">
      {getTranslation(dictionary, ['experienceSection', 'categories', title])}
    </p>
    <ul className="list-disc px-5">
      {skills.map((skill, index) => {
        const translation = getTranslation(dictionary, [
          'experienceSection',
          'categories',
          skill.name,
        ]);
        return (
          <li key={index}>
            <span
              className={clsx(skill.highlighted && 'font-bold text-accent')}
            >
              {translation === '' ? skill.name : translation}
            </span>
          </li>
        );
      })}
    </ul>
  </div>
);

interface ProjectProps {
  descriptions: string[];
  links?: Link[];
  dictionary: Dictionary;
}

const Project: React.FC<ProjectProps> = ({
  descriptions,
  links,
  dictionary,
}) => (
  <div className="mt-2">
    <p className="font-bold">
      {getTranslation(dictionary, ['experienceSection', 'project', 'notable'])}
    </p>
    <ul className="list-disc px-5">
      {descriptions.map((description, index) => {
        const translation = getTranslation(dictionary, [
          'experienceSection',
          'project',
          description,
        ]);
        return <li key={index}>{addFontBoldJSX(translation)}</li>;
      })}
      {links?.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-400 underline"
          >
            {getTranslation(dictionary, [
              'experienceSection',
              'link',
              link.name,
            ])}
            <FaExternalLinkAlt />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceSection;
