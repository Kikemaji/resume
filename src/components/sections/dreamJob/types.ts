type ThemeType =
  | 'didactico'
  | 'entretenido'
  | 'ambiente'
  | 'equilibrio'
  | 'sueldo';

export type Theme = { name: string; keyword: ThemeType };

export type Feature = { name: string; themes: ThemeType[] };
