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

const now = new Date().getTime();
const aproxStart = new Date(2022, 7, 8).getTime(); // Adding previous jobs
const totalTimeMiliseconds = now - aproxStart;
const totalYearsOfExperience = Math.floor(
  totalTimeMiliseconds / (365.25 * 24 * 60 * 60 * 1000)
);
const totalMonthsOfExperience = Math.floor(
  (totalTimeMiliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
    (30.44 * 24 * 60 * 60 * 1000)
);

const startCurrentJob = new Date(2024, 3, 8).getTime(); // January is 0
const timeInCurrentJob = now - startCurrentJob;
const yearsOfExperienceCurrentJob = Math.floor(
  timeInCurrentJob / (365.25 * 24 * 60 * 60 * 1000)
);
const monthsOfExperienceCurrentJob = Math.floor(
  (timeInCurrentJob % (365.25 * 24 * 60 * 60 * 1000)) /
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
  const totalExperienceJSX = (
    <>
      {totalYearsOfExperience}{' '}
      {totalYearsOfExperience > 1
        ? getTranslation(dictionary, ['plusYears'])
        : getTranslation(dictionary, ['year'])}{' '}
      {totalMonthsOfExperience}{' '}
      {totalMonthsOfExperience > 1
        ? getTranslation(dictionary, ['plusMonth'])
        : getTranslation(dictionary, ['month'])}{' '}
      {getTranslation(dictionary, ['experienceSection', 'ofExperience'])}
    </>
  );

  const currentJobExperienceString = `${getTranslation(dictionary, ['experienceSection', 'frontendEngineer'])} - ${yearsOfExperienceCurrentJob} ${
    yearsOfExperienceCurrentJob > 1
      ? getTranslation(dictionary, ['plusYears'])
      : getTranslation(dictionary, ['year'])
  } ${monthsOfExperienceCurrentJob} ${
    monthsOfExperienceCurrentJob > 1
      ? getTranslation(dictionary, ['plusMonth'])
      : getTranslation(dictionary, ['month'])
  } ${getTranslation(dictionary, ['experienceSection', 'ofExperience'])} - ${getTranslation(dictionary, ['experienceSection', 'currentJob'])}`;

  return (
    <section className="mb-16 mt-8 flex flex-col gap-2 lg:my-24">
      <h2 className="h2 text-center font-bold">{totalExperienceJSX}</h2>
      <Dialog
        triggerIcon={<FaPlus className="h-5 w-5" />}
        triggerClassName="flex items-center gap-4 rounded-md border bg-white p-3 text-black transition-colors hover:border-white hover:bg-black hover:text-white"
        triggerText={currentJobExperienceString}
        title={getTranslation(dictionary, [
          'experienceSection',
          'experience4',
          'title',
        ])}
        handleClose={resetSelect}
      >
        <div className="max-h-[50dvh] min-h-[30dvh] overflow-y-scroll">
          {value === '-1' && (
            <div className="grid h-[300px] place-items-center text-xl">
              {getTranslation(dictionary, ['experienceSection', 'noContent'])}
            </div>
          )}
        </div>
      </Dialog>
      <Dialog
        triggerIcon={<FaPlus className="h-5 w-5" />}
        triggerClassName="flex items-center gap-4 rounded-md border bg-white p-3 text-black transition-colors hover:border-white hover:bg-black hover:text-white"
        triggerText={getTranslation(dictionary, [
          'experienceSection',
          'experience3',
          'triggerText',
        ])}
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
            <div className="grid h-[300px] place-items-center text-xl">
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
        triggerClassName="flex items-center gap-4 rounded-md border bg-white p-3 text-black transition-colors hover:border-white hover:bg-black hover:text-white"
        triggerText={getTranslation(dictionary, [
          'experienceSection',
          'experience2',
          'triggerText',
        ])}
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
            <div className="grid h-[300px] place-items-center text-xl">
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
        triggerClassName="flex items-center gap-4 rounded-md border bg-white p-3 text-black transition-colors hover:border-white hover:bg-black hover:text-white"
        triggerText={getTranslation(dictionary, [
          'experienceSection',
          'experience1',
          'triggerText',
        ])}
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
            <div className="grid h-[300px] place-items-center text-xl">
              {getTranslation(dictionary, ['experienceSection', 'choseOption'])}
            </div>
          )}
          {value === '0' && (
            <Skills categories={data.categories3_1} dictionary={dictionary} />
          )}
          {value === '1' && (
            <Skills categories={data.categories3_2} dictionary={dictionary} />
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
  <section>
    <h4 className="font-bold">
      {getTranslation(dictionary, ['experienceSection', 'categories', title])}
    </h4>
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
  </section>
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
  <section className="mt-2">
    <h4 className="font-bold">
      {getTranslation(dictionary, ['experienceSection', 'project', 'notable'])}
    </h4>
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
  </section>
);

export default ExperienceSection;
