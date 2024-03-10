import { Feature } from './types';

const countOccurrences = (features: Feature[]): Record<string, number> => {
  const occurrences: Record<string, number> = {};

  features.forEach((feature) => {
    if (occurrences[feature.theme]) {
      occurrences[feature.theme]++;
    } else {
      occurrences[feature.theme] = 1;
    }
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
  return valuePerTheme;
};
