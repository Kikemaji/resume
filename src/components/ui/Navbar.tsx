import Image from 'next/image';
import React from 'react';
import { CiGlobe } from 'react-icons/ci';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center gap-4 border-b border-white px-4 py-2">
      <Image
        alt="Foto pequeña Enrique"
        src="/profile_photo_sm_circle.png"
        width={24}
        height={24}
      />
      <div className="flex-1 text-sm">Enrique Márquez Jiménez</div>
      <CiGlobe className="h-5 w-5" />
    </nav>
  );
};
