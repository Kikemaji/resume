'use client';
import { RadarChart } from '@/components/charts/RadarChart';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Feature, SelectedFeatures } from './types';
import { calculateFeatureValuePerTheme, getFeaturesByType } from './jobUtils';
import { featuresContent, mainThemes } from './jobContent';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';
import ExplanationDialog from './ExplanationDialog';

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
      active: false,
    };
    return acc;
  },
  {} as SelectedFeatures
);

const featuresByType = getFeaturesByType(featuresContent);

const DreamJobSection = ({ dictionary }: { dictionary: Dictionary }) => {
  const [selectedFeatures, setSelectedFeatures] =
    useState<SelectedFeatures>(allFeaturesNotActive);
  const [radarValuesArray, setRadarValuesArray] = useState(
    Array(mainThemes.length).fill(0)
  );

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

  return (
    <section className="my-16 flex flex-col gap-4 rounded-lg border-2 border-dashed border-white p-4 lg:my-32">
      <div>
        <h2 className="h2 text-center font-bold">
          {getTranslation(dictionary, ['dreamJobSection', 'title'])}
        </h2>
        <h4 className="h4 text-center">
          {getTranslation(dictionary, ['dreamJobSection', 'subtitle'])}
        </h4>
      </div>
      <div>
        {Object.entries(featuresByType).map(([type, feature]) => (
          <div key={type}>
            <p>
              {getTranslation(dictionary, ['dreamJobSection', 'type', type])}
            </p>
            <div className="flex flex-wrap gap-1 text-sm text-black">
              {feature.map((feature, index) => (
                <StringItem
                  key={index}
                  value={feature}
                  isSelected={selectedFeatures[feature.name].active}
                  onSelect={handleFeatureSelection}
                  dictionary={dictionary}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <RadarChart
        indicators={mainThemes}
        values={radarValuesArray.map((value) => value)}
        maxValue={maxFeaturesNumber}
        dictionary={dictionary}
      />
      <p className="text-xs opacity-60">
        ¿No entiendes algunas de las opciones?{' '}
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
    <div
      className={clsx(
        'w-fit cursor-pointer rounded-md px-2 py-0.5 text-sm font-semibold transition-[300ms] hover:scale-95',
        isSelected ? 'bg-white' : 'bg-gray-800 text-white hover:bg-gray-500'
      )}
      onClick={toggleSelection}
    >
      {getTranslation(dictionary, ['dreamJobSection', 'tags', value.name])}
    </div>
  );
};

export default DreamJobSection;
