'use client';
import { RadarChart } from '@/components/charts/RadarChart';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Feature, SelectedFeatures } from './types';
import {
  calculateFeatureValuePerTheme,
  getFeaturesByType,
  initDefaultValues,
} from './jobUtils';
import { featuresContent, mainThemes } from './jobContent';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';
import ExplanationDialog from './ExplanationDialog';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

const { maxFeaturesNumber, valuePerTheme } =
  calculateFeatureValuePerTheme(featuresContent);

const positionsArray: Record<string, number> = {};
mainThemes.forEach((objeto, index) => {
  positionsArray[objeto.keyword] = index;
});

const allFeaturesNotActive: SelectedFeatures = featuresContent.reduce(
  (acc, feature) => {
    acc[feature.name] = {
      feature,
      active: feature.activeByDefault,
    };
    return acc;
  },
  {} as SelectedFeatures
);

const initValues = initDefaultValues(
  featuresContent,
  valuePerTheme,
  positionsArray
);
const featuresByType = getFeaturesByType(featuresContent);
const numberOfTypes = Object.keys(featuresByType).length;

const DreamJobSection = ({ dictionary }: { dictionary: Dictionary }) => {
  const [selectedFeatures, setSelectedFeatures] =
    useState<SelectedFeatures>(allFeaturesNotActive);
  const [radarValuesArray, setRadarValuesArray] = useState(initValues);
  const [typeIndexMobile, setTypeIndexMobile] = useState(1);

  const handleFeatureSelection = (feature: Feature) => {
    const { themes, name } = feature;
    const featureSelected = selectedFeatures[name];
    const isActive = featureSelected.active;

    setRadarValuesArray((prev) => {
      return themes.reduce(
        (acc, theme) => {
          const value = valuePerTheme[theme];
          const position = positionsArray[theme];
          acc[position] += isActive ? -value : value;
          return acc;
        },
        [...prev]
      );
    });

    setSelectedFeatures((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          active: !isActive,
        },
      };
    });
  };

  const changeIndexTypeMobile = (n: number) => {
    setTypeIndexMobile((prev) => {
      const newValue = Math.max(0, Math.min(prev + n, numberOfTypes));
      return newValue;
    });
  };

  return (
    <section className="my-16 flex flex-col gap-4 rounded-lg border-2 border-dashed border-white p-4 lg:my-32">
      <div>
        <h2 className="h2 text-center font-bold">
          {getTranslation(dictionary, ['dreamJobSection', 'title'])}
        </h2>
        <h4 className="h4 text-center">
          {getTranslation(dictionary, ['dreamJobSection', 'subtitle'])}
        </h4>
        <p className="text-center text-xs opacity-60">
          {getTranslation(dictionary, ['dreamJobSection', 'subtitle2'])}
        </p>
      </div>
      {/* MOBILE */}
      <div className="bg relative w-full">
        <div className="w-full overflow-x-hidden">
          {typeIndexMobile > 0 && (
            <div
              className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 rounded-full bg-secondary p-1 text-white"
              onClick={() => changeIndexTypeMobile(-1)}
            >
              <IoChevronBackSharp />
            </div>
          )}
          {typeIndexMobile < numberOfTypes - 1 && (
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full rounded-full bg-secondary p-1 text-white"
              onClick={() => changeIndexTypeMobile(1)}
            >
              <IoChevronForwardSharp />
            </div>
          )}
          <div
            className={' flex w-[300%] transition-transform md:hidden'}
            style={{ transform: `translateX(-${33 * typeIndexMobile}%)` }}
          >
            {Object.entries(featuresByType).map(([type, feature]) => (
              <section key={type} className="w-1/3 px-2">
                <h5 className="text-center font-semibold underline">
                  {getTranslation(dictionary, [
                    'dreamJobSection',
                    'type',
                    type,
                  ])}
                </h5>
                <ul className="flex flex-wrap justify-center gap-1 text-sm text-black">
                  {feature.map((feature, index) => (
                    <StringItem
                      key={index}
                      value={feature}
                      isSelected={selectedFeatures[feature.name].active}
                      onSelect={handleFeatureSelection}
                      dictionary={dictionary}
                    />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
      {/* NO MOBILE */}
      <div className="hidden md:block">
        {Object.entries(featuresByType).map(([type, feature]) => (
          <section key={type} className="md:mb-2 md:last:mb-0">
            <h5>
              {getTranslation(dictionary, ['dreamJobSection', 'type', type])}
            </h5>
            <ul className="flex flex-wrap gap-1 text-sm text-black">
              {feature.map((feature, index) => (
                <StringItem
                  key={index}
                  value={feature}
                  isSelected={selectedFeatures[feature.name].active}
                  onSelect={handleFeatureSelection}
                  dictionary={dictionary}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
      <RadarChart
        indicators={mainThemes}
        values={radarValuesArray.map((value) => value)}
        maxValue={maxFeaturesNumber}
        dictionary={dictionary}
      />
      <ul className=" flex flex-wrap text-xs opacity-60 md:hidden">
        {mainThemes.map((theme) => (
          <li key={theme.name} className="mr-1">
            <span className="font-bold">
              【
              {getTranslation(dictionary, [
                'dreamJobSection',
                'themes',
                'mobile',
                theme.name,
              ])}
              】:{' '}
            </span>
            {getTranslation(dictionary, [
              'dreamJobSection',
              'themes',
              theme.name,
            ])}
          </li>
        ))}
      </ul>
      <p className="text-xs opacity-60">
        {getTranslation(dictionary, ['dreamJobSection', 'modal', 'preTrigger'])}{' '}
        <ExplanationDialog dictionary={dictionary} />
      </p>
    </section>
  );
};

interface FeatureItemProps {
  value: Feature;
  isSelected: boolean;
  onSelect: (value: Feature) => void;
  dictionary: Dictionary;
}

const StringItem: React.FC<FeatureItemProps> = ({
  value,
  isSelected,
  onSelect,
  dictionary,
}) => {
  const toggleSelection = () => {
    onSelect(value);
  };

  return (
    <li
      className={clsx(
        'w-fit cursor-pointer rounded-md px-2 py-0.5 text-center text-sm font-semibold transition-[300ms] hover:scale-95',
        isSelected ? 'bg-white' : 'bg-gray-800 text-white hover:bg-gray-500'
      )}
      onClick={toggleSelection}
    >
      {getTranslation(dictionary, ['dreamJobSection', 'tags', value.name])}
    </li>
  );
};

export default DreamJobSection;
