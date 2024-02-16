import Image from 'next/image';
import React from 'react';
import { CiGlobe } from 'react-icons/ci';

export const Navbar = () => {
  const fechaNacimiento = new Date(1999, 0, 10); // Año, mes (enero es 0-indexed), día
  const edadCalculada = Math.floor(
    (new Date().getTime() - fechaNacimiento.getTime()) /
      (365.25 * 24 * 60 * 60 * 1000)
  );

  return (
    <nav className="sticky top-0 flex items-center gap-4 border-b border-white px-4 py-2">
      <Image
        alt="Foto pequeña Enrique"
        src="/profile_photo_sm_circle.png"
        width={24}
        height={24}
      />
      <div className="flex-1 text-sm">
        Enrique Márquez Jiménez - {edadCalculada} años
      </div>
      <CiGlobe className="h-5 w-5" />
    </nav>
  );
};
