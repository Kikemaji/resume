'use client';
import { RadarChart } from '@/components/charts/RadarChart';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Feature, SelectedFeatures } from './types';
import { calculateFeatureValuePerTheme, getFeaturesByType } from './jobUtils';
import { featuresContent, mainThemes } from './jobContent';

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

const DreamJobSection = () => {
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
      <h2 className="text-center text-xl font-bold">
        ¿Cómo es mi trabajo ideal?
      </h2>
      <div>
        {Object.entries(featuresByType).map(([type, feature]) => (
          <div key={type}>
            <p>{type}</p>
            <div className="flex flex-wrap gap-1 text-sm text-black">
              {feature.map((feature, index) => (
                <StringItem
                  key={index}
                  value={feature}
                  isSelected={selectedFeatures[feature.name].active}
                  onSelect={handleFeatureSelection}
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
      />
    </section>
  );
};

interface FeatureItemProps {
  value: Feature;
  isSelected: boolean;
  onSelect: (value: Feature) => void;
}

const StringItem: React.FC<FeatureItemProps> = ({
  value,
  isSelected,
  onSelect,
}) => {
  const toggleSelection = () => {
    onSelect(value);
  };

  return (
    <div
      className={clsx(
        'w-fit cursor-pointer rounded-md px-2 py-0.5 text-sm font-semibold text-black',
        isSelected ? 'bg-[#FFE434] ' : 'bg-white'
      )}
      onClick={toggleSelection}
    >
      {value.name}
    </div>
  );
};

export default DreamJobSection;
