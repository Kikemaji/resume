import { FaCode } from 'react-icons/fa6';

import { Navbar } from '@/components/ui/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-y-scroll bg-background text-text">
      <Navbar />
      <div className="p-4">
        <section className="flex flex-col-reverse gap-5  md:flex-row">
          <div className="flex flex-col gap-3">
            <h1 className="text-center text-2xl font-bold">
              El ingeniero frontend que necesitas
            </h1>
            <h3 className="text-center text-lg">
              Con código para que no tengas que mirar tantos CVs
            </h3>
            <button className="flex items-center justify-center gap-3 rounded-md bg-secondary px-3 py-1">
              <FaCode />
              <span>Ver código</span>
            </button>
            <button className="flex items-center justify-center gap-1 rounded-md bg-primary px-3 py-1 text-black">
              <span>Contacto</span>
            </button>
          </div>
          <div className="relative flex justify-center">
            <Image
              alt="Foto grande Enrique"
              src="/profile_photo_lg_circle.png"
              width={300}
              height={300}
              priority
            />
          </div>
        </section>
        <div className="my-4 opacity-80">
          <p>Calidad asegurada por:</p>
          <div className="flex gap-2">
            <div>ESLint</div>
            <div>Sonnar</div>
            <div>Puede que tú si ves el código</div>
          </div>
        </div>
        <section className="flex flex-col">
          <div>
            <h2 className="text-xl font-bold">Aprendo y me adapto rápido</h2>
            <ul>
              <li>Acostumbrado a participar en varios proyectos</li>
              <li>
                He sido autónomo = aprendía lo que fuera necesario
                constantemente
              </li>
            </ul>
          </div>
          <div>MAPA Madrid</div>
        </section>
        <section className="my-4">
          <p>Web creada con: </p>
          <div className="flex">
            <div>Next.js</div>
            <div>React.js</div>
            <div>Tailwind.js</div>
            <div>Typescript..</div>{' '}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold">Soft skills</h2>
          <div>Cuadraditos hablando de 4 cosas diferentes</div>
        </section>
      </div>
    </main>
  );
}
