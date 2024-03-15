import 'server-only';

export interface Dictionary {
  [key: string]: string | Dictionary;
}

interface DictionaryPromise {
  [key: string]: () => Promise<Dictionary>;
}

const dictionaries: DictionaryPromise = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();

function isDictionary(obj: any): obj is Dictionary {
  return typeof obj === 'object' && obj !== null;
}

// Typescript cannot infer nested values, so a safe way it's needed to get the part of the dictionary that I want
export function getTranslation(obj: any, keys: string[]): string | undefined {
  if (!isDictionary(obj)) {
    return undefined;
  }
  const [key, ...rest] = keys;
  const value = obj[key];
  if (rest.length === 0) {
    return typeof value === 'string' ? value : undefined;
  }
  return getTranslation(value, rest);
}
