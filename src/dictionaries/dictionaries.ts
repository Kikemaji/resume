import 'server-only';

interface JsonLeaf {
  [key: string]: string;
}

type JsonValue = string | JsonLeaf | Dictionary;

export interface Dictionary {
  [key: string]: JsonValue;
}

interface DictionaryPromise {
  [key: string]: () => Promise<Dictionary>;
}

const dictionaries: DictionaryPromise = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
