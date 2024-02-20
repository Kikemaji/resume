import {
  FaCode,
  FaHeart,
  FaCircleNodes,
  FaPlus,
  FaMicrophone,
  FaCamera,
} from 'react-icons/fa6';
import { RiTeamFill } from 'react-icons/ri';
import { GiCrystalGrowth } from 'react-icons/gi';

import { Navbar } from '@/components/ui/Navbar';
import Image from 'next/image';
import MapChart from '@/components/maps/MapChart';
import { FaUserCircle } from 'react-icons/fa';

export default function Home() {
  const comienzoAprox = new Date(2022, 7, 12).getTime();
  const ahora = new Date().getTime();
  const diferenciaEnMilisegundos = ahora - comienzoAprox;
  const anosTotales = Math.floor(
    diferenciaEnMilisegundos / (365.25 * 24 * 60 * 60 * 1000)
  );
  const mesesRestantes = Math.floor(
    (diferenciaEnMilisegundos % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
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
        <div className="my-4 ">
          <p className="opacity-50">Calidad asegurada por:</p>
          <div className="mt-1 flex items-end gap-2">
            <div className="flex flex-col gap-1">
              <Image
                className=""
                alt="ESLint icon"
                src="/eslint.svg"
                width={24}
                height={21}
              />
              <span className="text-xs">ESLint</span>
            </div>
            <div
              className="
            text-center text-xs"
            >
              <p>Principios</p>SOLID
            </div>
            {/* <div>¿Sonnar?</div> */}
            <div className="text-xs">
              <p>¿Por ti?</p>
              <p className="flex items-center gap-2">
                <a href="" className="underline">
                  Dale amor al repo
                </a>
                <FaHeart className="animate-heart-pulse text-red-500" />
              </p>
            </div>
          </div>
        </div>
        <section className="flex flex-col gap-4 md:flex-row">
          <div>
            <h2 className="text-center text-xl font-bold">
              Aprendo y me adapto rápido
            </h2>
            <ul className="list-disc px-4">
              <li>Me encanta programar</li>
              <li>Frase sobre fácil de motivar</li>
              <li>Con iniciativa y habilidad para resolver problemas</li>
            </ul>
          </div>
          <div className="">
            <p>Modo de trabajo según localización:</p>
            <MapChart />
          </div>
        </section>
        <section className="mb-4">
          <h3 className="text-lg font-bold">Web creada con: </h3>
          <div className="flex">
            <div className="flex w-full items-end justify-around">
              <div className="">
                <Image
                  className="mx-auto w-10 invert"
                  alt="NextJS icon"
                  src="/next.svg"
                  width={24}
                  height={24}
                />
                <span>Next.js</span>
              </div>
              <div className="">
                <Image
                  className="mx-auto w-10"
                  alt="ReactJS icon"
                  src="/react.svg"
                  width={24}
                  height={24}
                />
                <span>React.js</span>
              </div>
              <div className="">
                <Image
                  className="mx-auto w-10"
                  alt="Typescript icon"
                  src="/typescript.svg"
                  width={24}
                  height={24}
                />
                <span>Typescript</span>
              </div>
              <div className="">
                <Image
                  className="mx-auto w-10"
                  alt="Tailwind CSS icon"
                  src="/tailwind.svg"
                  width={40}
                  height={24}
                />
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-center text-xl font-bold">
            ¿Por qué elegirme a mí?
          </h2>
          <div className="flex w-fit items-center rounded-lg border border-border px-6 py-2 md:flex-col">
            <GiCrystalGrowth className="h-12 w-12 text-white" />
            <div className="px-5">
              <h4 className="text-lg font-semibold">Growth Mindset</h4>
              <p>Me encanta lo difícil </p>
              <p>---- --- --- </p>
            </div>
          </div>
          <div className="ml-auto flex w-fit items-center rounded-lg border border-border px-6 py-2 md:flex-col">
            <RiTeamFill className="h-12 w-12 text-white" />
            <div className="px-5">
              <h4 className="text-lg font-semibold">Team Player</h4>
              <p>Empático</p>
              <p>Sociable</p>
            </div>
          </div>
          <div className="ml-auto flex w-fit items-center rounded-lg border border-border px-6 py-2 md:flex-col">
            <FaCircleNodes className="h-12 w-12 text-white" />
            <div className="px-5">
              <h4 className="text-lg font-semibold">Autocrítico</h4>
              <p>Reconozco mis errores</p>
              <p>Busco respuestas sin miedo a preguntar</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-center text-xl font-bold">
            {anosTotales} {anosTotales > 1 ? 'años' : 'año'} y {mesesRestantes}{' '}
            {mesesRestantes === 1 ? 'mes' : 'meses'} de experiencia
          </h2>
          <div className="flex items-center gap-4 rounded-md bg-white p-3 text-black">
            <FaPlus className="h-5 w-5" />
            <span className="font-semibold">
              Software de las elecciones - 1 año y 2 meses
            </span>
          </div>
          <div className="flex items-center gap-4 rounded-md bg-white p-3 text-black">
            <FaPlus className="h-5 w-5" />
            <span className="font-semibold">Fullstack becario - 4 meses</span>
          </div>
          <div className="flex items-center gap-4 rounded-md bg-border p-3 text-black">
            <FaPlus className="h-5 w-5" />
            <span className="font-semibold">Enseñando a estudiar</span>
          </div>
        </section>
        <section className="my-4 flex flex-col gap-4">
          <h2 className="text-center text-xl font-bold">
            Habla conmigo directamente
          </h2>
          <div className=" rounded-lg border-2 border-border">
            <div className="w-full rounded-t-lg border-b-2 border-border px-3 py-1 text-center font-bold text-white">
              Contacto RRHH
            </div>
            <div className="flex flex-col gap-3 p-4 ">
              <div className="flex items-end gap-1">
                <FaUserCircle className="mb-1 h-5 w-5" />
                <p className="mr-auto w-fit max-w-[70%] rounded-2xl bg-[#343434] p-2 ">
                  No sé si es suficiente :/
                </p>
              </div>

              <p className="ml-auto w-fit max-w-[70%] rounded-2xl bg-[#00D5CD] p-2">
                Me encanta aprender nuevas tecnologías! Hace el trabajo más
                interesante
              </p>
              <p className="ml-auto w-fit max-w-[70%] rounded-2xl bg-[#00D5CD] p-2">
                Por ejemplo, Node, AWS, testing, Vue...
              </p>
              <div className="flex items-end gap-1">
                <FaUserCircle className="mb-1 h-5 w-5" />
                <p className="mr-auto w-fit max-w-[70%] rounded-2xl bg-[#343434] p-2 ">
                  También necesitamos que sepas resolver los problemas por tu
                  cuenta
                </p>
              </div>
              <p className="ml-auto w-fit max-w-[70%] rounded-2xl bg-[#00D5CD] p-2">
                Hecho! Me entretiene bastante cuando tengo un problema complejo
                que resolver
              </p>
              <div className="flex items-end gap-1">
                <FaUserCircle className="mb-1 h-5 w-5" />
                <p className="mr-auto w-fit max-w-[70%] rounded-2xl bg-[#343434] p-2 ">
                  Me gusta tu actitud, mándame tu CV y agendamos la primera
                  entrevista
                </p>
              </div>
              <p className="ml-auto w-fit max-w-[70%] rounded-2xl bg-[#00D5CD] p-2 text-end">
                Genial :)
              </p>
              <p className="ml-auto w-fit max-w-[70%] rounded-2xl bg-[#00D5CD] p-2 text-end">
                CV Enrique adjunto
              </p>
              <div className="flex gap-4">
                <div className="flex-1 rounded-2xl bg-[#343434] p-2 text-border">
                  Escribe tu mensaje
                </div>
                <FaMicrophone className="h-auto text-white" />
                <FaCamera className="h-auto text-white" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
