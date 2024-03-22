import { Feature, Theme } from './types';

export const mainThemes: Theme[] = [
  { name: 'educational', keyword: 'didactico' },
  { name: 'entertaining', keyword: 'entretenido' },
  { name: 'environment', keyword: 'ambiente' },
  { name: 'balance', keyword: 'equilibrio' },
  { name: 'salary', keyword: 'sueldo' },
];
export const featuresContent: Feature[] = [
  { name: 'workModel', themes: ['equilibrio'], type: 'need' },
  { name: 'overtime', themes: ['equilibrio', 'ambiente'], type: 'need' },
  { name: 'flexible', themes: ['equilibrio'], type: 'need' },
  { name: 'salaryReview', themes: ['sueldo', 'equilibrio'], type: 'need' },
  { name: 'coWorkers', themes: ['ambiente', 'entretenido'], type: 'need' },
  { name: 'insurance', themes: ['equilibrio', 'sueldo'], type: 'plus' },
  { name: 'codeReviews', themes: ['didactico'], type: 'plus' },
  { name: 'communication', themes: ['ambiente', 'entretenido'], type: 'need' },
  { name: 'goodPractice', themes: ['didactico', 'entretenido'], type: 'need' },
  { name: 'flexPayment', themes: ['sueldo'], type: 'plus' },
  { name: 'moreFrameworks', themes: ['entretenido', 'didactico'], type: 'plus' },
  { name: 'testing', themes: ['didactico'], type: 'plus' },
  { name: 'agile', themes: ['didactico', 'equilibrio'], type: 'plus' },
  { name: 'backend', themes: ['didactico', 'entretenido'], type: 'plus' },
  { name: 'topSalary', themes: ['sueldo', 'equilibrio'], type: 'dream' },
  { name: 'dailyIntensive', themes: ['equilibrio'], type: 'dream' },
  { name: 'youngTeam', themes: ['ambiente', 'entretenido'], type: 'plus' },
  { name: 'bonus', themes: ['sueldo'], type: 'plus' },
  { name: 'training', themes: ['didactico'], type: 'plus' },
  { name: 'freedom', themes: ['entretenido', 'didactico'], type: 'dream' },
];
