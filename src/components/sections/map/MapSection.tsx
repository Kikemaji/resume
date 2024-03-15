import MapChart from '@/components/charts/MapChart';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';
import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

export const MapSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="lg:w-1/2">
        <h2 className="mb-2 text-lg font-bold lg:text-xl xl:text-2xl">
          {getTranslation(dictionary, ['mapSection', 'title'])}
        </h2>
        <ul>
          <li className="mt-1 flex items-center gap-2 md:mt-2.5 md:gap-4 lg:text-lg">
            <IoCheckmarkCircle className="h-5 w-5 flex-shrink-0" />
            Me encanta programar.
          </li>
          <li className="mt-1 flex items-center gap-2 md:mt-2.5 md:gap-4 lg:text-lg">
            <IoCheckmarkCircle className="h-5 w-5 flex-shrink-0" />
            Independiente y me motivo con facilidad.
          </li>
          <li className="mt-1 flex items-center gap-2 md:mt-2.5 md:gap-4 lg:text-lg">
            <IoCheckmarkCircle className="h-5 w-5 flex-shrink-0" />
            Con iniciativa y habilidad para resolver problemas.
          </li>
        </ul>
      </div>
      <div className="min-w-[300px] lg:min-w-[450px]">
        <MapChart dictionary={dictionary} />
      </div>
    </section>
  );
};

export default MapSection;
