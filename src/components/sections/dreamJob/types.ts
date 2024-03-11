type ThemeType =
  | 'didactico'
  | 'entretenido'
  | 'ambiente'
  | 'equilibrio'
  | 'sueldo';

export type FeatureType = 'need' | 'plus' | 'dream';

export type Theme = { name: string; keyword: ThemeType };

export type Feature = { name: string; themes: ThemeType[]; type: FeatureType };

export type SelectedFeatures = {
  [key: string]: {
    feature: Feature;
    active: boolean;
  };
};
