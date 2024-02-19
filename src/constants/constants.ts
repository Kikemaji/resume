enum WorkingTypesNumber {
  REMOTE = 1,
  HYBRID = 2,
  IN_PERSON = 3,
}

type numberKeyObject = {
  [key: number]: { label: string; color: string };
};

type stringKeyObject = {
  [key: string]: { name: string; value: WorkingTypesNumber };
};

export const codigoPorComunidad: stringKeyObject = {
  'ESP.1_1': { name: 'Andalucía', value: WorkingTypesNumber.REMOTE },
  'ESP.2_1': { name: 'Aragón', value: WorkingTypesNumber.REMOTE },
  'ESP.3_1': { name: 'Cantabria', value: WorkingTypesNumber.REMOTE },
  'ESP.4_1': { name: 'Castilla-La Mancha', value: WorkingTypesNumber.REMOTE },
  'ESP.5_1': { name: 'Castilla y León', value: WorkingTypesNumber.REMOTE },
  'ESP.6_1': { name: 'Cataluña', value: WorkingTypesNumber.REMOTE },
  'ESP.7_1': { name: 'Ceuta y Melilla', value: WorkingTypesNumber.REMOTE },
  'ESP.8_1': { name: 'Comunidad de Madrid', value: WorkingTypesNumber.HYBRID },
  'ESP.9_1': {
    name: 'Comunidad Foral de Navarra',
    value: WorkingTypesNumber.REMOTE,
  },
  'ESP.10_1': {
    name: 'Comunidad Valenciana',
    value: WorkingTypesNumber.REMOTE,
  },
  'ESP.11_1': { name: 'Extremadura', value: WorkingTypesNumber.REMOTE },
  'ESP.12_1': { name: 'Galicia', value: WorkingTypesNumber.REMOTE },
  'ESP.13_1': { name: 'Islas Baleares', value: WorkingTypesNumber.REMOTE },
  'ESP.15_1': { name: 'La Rioja', value: WorkingTypesNumber.REMOTE },
  'ESP.16_1': { name: 'País Vasco', value: WorkingTypesNumber.REMOTE },
  'ESP.17_1': {
    name: 'Principado de Asturias',
    value: WorkingTypesNumber.REMOTE,
  },
  'ESP.18_1': { name: 'Región de Murcia', value: WorkingTypesNumber.REMOTE },
};

export const workingTypesValue: numberKeyObject = {
  [WorkingTypesNumber.REMOTE]: { label: 'Remoto', color: '#93ddc2' }, //FIXME: Theme.colors
  [WorkingTypesNumber.HYBRID]: { label: 'Híbrido', color: '#26697b' }, //FIXME: Theme.colors
  [WorkingTypesNumber.IN_PERSON]: { label: 'Presencial', color: '#f1f1f1' }, //FIXME: Theme.colors
};
