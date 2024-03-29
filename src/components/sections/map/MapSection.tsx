import MapChart from '@/components/charts/MapChart';
import { Dictionary } from '@/dictionaries/dictionaries';
import { getTranslation } from '@/utils/getTranslations';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoCheckmarkCircle } from 'react-icons/io5';

export const MapSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center lg:justify-around">
      <section className="lg:w-1/2">
        <h2 className="h2 mb-2 font-bold">
          {getTranslation(dictionary, ['mapSection', 'title'])}
        </h2>
        <ul>
          <li className="mt-1 flex items-center gap-2 md:mt-2.5 md:gap-4 lg:text-lg">
            <IoCheckmarkCircle className="h-5 w-5 flex-shrink-0" />
            {getTranslation(dictionary, ['mapSection', '1'])}
          </li>
          <li className="mt-1 flex items-center gap-2 md:mt-2.5 md:gap-4 lg:text-lg">
            <IoCheckmarkCircle className="h-5 w-5 flex-shrink-0" />
            {getTranslation(dictionary, ['mapSection', '2'])}
          </li>
          <li className="mt-1 flex items-center gap-2 md:mt-2.5 md:gap-4 lg:text-lg">
            <IoCheckmarkCircle className="h-5 w-5 flex-shrink-0" />
            {getTranslation(dictionary, ['mapSection', '3'])}
          </li>
        </ul>
      </section>
      <div className="relative min-w-[250px] md:min-w-[300px] lg:w-[400px]">
        <div className="absolute left-5 top-1/3">
          <FaLongArrowAltRight className="animate-pulse text-2xl" />
        </div>
        <MapChart dictionary={dictionary} />
      </div>
    </div>
  );
};

export default MapSection;
