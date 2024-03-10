'use client';
import { RadarChart } from '@/components/charts/RadarChart';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Feature } from './types';
import { calculateFeatureValuePerTheme } from './jobUtils';
import { featuresContent, mainThemes } from './jobContent';

const DreamJobSection = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const valuePerTheme = calculateFeatureValuePerTheme(featuresContent);
  const [valuesArray, setValuesArray] = useState(
    Array(mainThemes.length).fill(0)
  );
  const positionsArray: Record<string, number> = {};
  mainThemes.forEach((objeto, index) => {
    positionsArray[objeto.keyword] = index;
  });

  const handleFeatureSelection = (feature: Feature) => {
    const { theme, name } = feature;
    const value = valuePerTheme[theme];
    const position = positionsArray[theme];
    console.log(value, ' + ', position);

    setValuesArray((prev) => {
      const auxArray = [...prev];
      auxArray[position] += selectedFeatures.some((f) => f.name === name)
        ? -value
        : value;
      return auxArray;
    });

    setSelectedFeatures((prev) => {
      const updatedFeatures = prev.filter((f) => f.name !== name);
      return selectedFeatures.some((f) => f.name === name)
        ? updatedFeatures
        : [...updatedFeatures, feature];
    });
  };

  // Meter array de themes por feature para que cada click se reparta más.
  // Distinguir plus, necesario y soñar es gratis

  return (
    <section className="my-8 flex flex-col gap-4 rounded-lg border-2 border-dashed border-white p-4">
      <h2 className="text-center text-xl font-bold">
        ¿Cómo es mi trabajo ideal?
      </h2>
      <div>
        <p>Necesario</p>
        <div className="flex flex-wrap gap-1 text-sm text-black">
          {featuresContent.map((feature, index) => (
            <StringItem
              key={index}
              value={feature}
              isSelected={selectedFeatures.some(
                (selectedFeature) => selectedFeature.name === feature.name
              )}
              onSelect={handleFeatureSelection}
            />
          ))}
        </div>
        <p>Plus</p>
        <div className="flex flex-wrap gap-1 text-sm text-black"></div>
        <p>Soñar es gratis</p>
        <div className="flex flex-wrap gap-1 text-sm text-black"></div>
      </div>
      <RadarChart indicators={mainThemes} values={valuesArray} />
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
