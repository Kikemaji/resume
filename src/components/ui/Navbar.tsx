import Image from 'next/image';
import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import { getTranslation } from '@/utils/getTranslations';
import { Dictionary } from '@/dictionaries/dictionaries';

export const Navbar = ({ dictionary }: { dictionary: Dictionary }) => {
  const fechaNacimiento = new Date(1999, 0, 10); // Año, mes (enero es 0-indexed), día
  const edadCalculada = Math.floor(
    (new Date().getTime() - fechaNacimiento.getTime()) /
      (365.25 * 24 * 60 * 60 * 1000)
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white bg-black ">
      <div className="mx-auto flex items-center gap-4 px-4 py-2  2xl:max-w-7xl">
        <Image
          alt={getTranslation(dictionary, ['photo'])}
          src="/profile_photo_sm_circle.png"
          width={24}
          height={24}
        />
        <div className="flex-1 text-sm">
          Enrique Márquez Jiménez - {edadCalculada}{' '}
          {getTranslation(dictionary, ['years'])}
        </div>
        <Dropdown />
      </div>
    </nav>
  );
};
