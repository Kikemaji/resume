import { Feature, FeatureType } from './types';

const countOccurrences = (features: Feature[]): Record<string, number> => {
  const occurrences: Record<string, number> = {};

  features.forEach((feature) => {
    feature.themes.forEach((theme) => {
      if (occurrences[theme]) {
        occurrences[theme]++;
      } else {
        occurrences[theme] = 1;
      }
    });
  });

  return occurrences;
};

const getMaxOccurrencesCount = (
  occurrences: Record<string, number>
): number => {
  let maxCount = 0;

  for (const theme in occurrences) {
    if (occurrences.hasOwnProperty(theme)) {
      const count = occurrences[theme];
      if (count > maxCount) {
        maxCount = count;
      }
    }
  }

  return maxCount;
};

//Aimed to balance points when a theme has more features than others
export const calculateFeatureValuePerTheme = (features: Feature[]) => {
  const totalFeaturesPerTheme = countOccurrences(features);
  const maxFeaturesNumber = getMaxOccurrencesCount(totalFeaturesPerTheme);
  const valuePerTheme: Record<string, number> = {};

  for (const theme in totalFeaturesPerTheme) {
    if (totalFeaturesPerTheme.hasOwnProperty(theme)) {
      const totalFeatureCount = totalFeaturesPerTheme[theme];
      valuePerTheme[theme] = maxFeaturesNumber / totalFeatureCount;
    }
  }
  return { maxFeaturesNumber, valuePerTheme };
};

export const getFeaturesByType = (featuresContent: Feature[]) => {
  const featuresByType: Record<FeatureType, Feature[]> = {
    need: [],
    plus: [],
    dream: [],
  };

  featuresContent.forEach((feature) => {
    if (feature.type === 'need') {
      featuresByType.need.push(feature);
    } else if (feature.type === 'plus') {
      featuresByType.plus.push(feature);
    } else if (feature.type === 'dream') {
      featuresByType.dream.push(feature);
    }
  });
  return featuresByType;
};

export const initDefaultValues = (
  featuresContent: Feature[],
  valuePerTheme: Record<string, number>,
  positionsArray: Record<string, number>
) => {
  let values = [0, 0, 0, 0, 0];
  featuresContent.forEach((feature) => {
    values = feature.themes.reduce(
      (acc, theme) => {
        const value = valuePerTheme[theme];
        const position = positionsArray[theme];
        acc[position] += feature.activeByDefault ? value : 0;
        return acc;
      },
      [...values]
    );
  });
  return values;
};
