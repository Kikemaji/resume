import { Dictionary } from '@/dictionaries/dictionaries';

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
