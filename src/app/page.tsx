import { CiGlobe } from 'react-icons/ci';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-y-scroll bg-background text-text">
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
    </main>
  );
}
