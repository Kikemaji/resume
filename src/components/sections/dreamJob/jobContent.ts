import { Feature, Theme } from './types';

export const mainThemes: Theme[] = [
  { name: 'educational', keyword: 'didactico' },
  { name: 'entertaining', keyword: 'entretenido' },
  { name: 'environment', keyword: 'ambiente' },
  { name: 'balance', keyword: 'equilibrio' },
  { name: 'salary', keyword: 'sueldo' },
];
export const featuresContent: Feature[] = [
  { name: 'workModel', themes: ['equilibrio'], type: 'need', activeByDefault: true },
  { name: 'overtime', themes: ['equilibrio', 'ambiente'], type: 'need', activeByDefault: true },
  { name: 'flexible', themes: ['equilibrio'], type: 'need', activeByDefault: true },
  { name: 'salaryReview', themes: ['sueldo', 'equilibrio'], type: 'need', activeByDefault: true },
  { name: 'coWorkers', themes: ['ambiente', 'entretenido'], type: 'need', activeByDefault: true },
  { name: 'insurance', themes: ['equilibrio', 'sueldo'], type: 'plus', activeByDefault: true },
  { name: 'codeReviews', themes: ['didactico'], type: 'plus', activeByDefault: false },
  { name: 'communication', themes: ['ambiente', 'entretenido'], type: 'need', activeByDefault: true },
  { name: 'goodPractice', themes: ['didactico', 'entretenido'], type: 'need', activeByDefault: true },
  { name: 'flexPayment', themes: ['sueldo'], type: 'plus', activeByDefault: true },
  { name: 'moreFrameworks', themes: ['entretenido', 'didactico'], type: 'plus', activeByDefault: false },
  { name: 'testing', themes: ['didactico'], type: 'plus', activeByDefault: false },
  { name: 'agile', themes: ['didactico', 'equilibrio'], type: 'plus', activeByDefault: false },
  { name: 'backend', themes: ['didactico', 'entretenido'], type: 'plus', activeByDefault: true },
  { name: 'topSalary', themes: ['sueldo', 'equilibrio'], type: 'dream', activeByDefault: false },
  { name: 'dailyIntensive', themes: ['equilibrio'], type: 'dream', activeByDefault: false },
  { name: 'youngTeam', themes: ['ambiente', 'entretenido'], type: 'plus', activeByDefault: false },
  { name: 'bonus', themes: ['sueldo'], type: 'plus', activeByDefault: true },
  { name: 'training', themes: ['didactico'], type: 'plus', activeByDefault: true },
  { name: 'freedom', themes: ['entretenido', 'didactico'], type: 'dream', activeByDefault: false },
];
