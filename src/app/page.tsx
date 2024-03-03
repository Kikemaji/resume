import { FaArrowDown, FaCheck } from 'react-icons/fa6';

import { Navbar } from '@/components/ui/Navbar';
import Image from 'next/image';
import Accordion from '@/components/ui/Accordion/Accordion';
import clsx from 'clsx';
import { ExperienceSection } from '@/components/sections/experience/ExperienceSection';
import HeroSection from '@/components/sections/hero/HeroSection';
import QualitySection from '@/components/sections/quality/QualitySection';
import MapSection from '@/components/sections/map/MapSection';
import CreatedSection from '@/components/sections/created/CreatedSection';
import WhyMeSection from '@/components/sections/whyMe/WhyMeSection';
import ChatSection from '@/components/sections/chat/ChatSection';

export default function Home() {
  const trabajoIdealContent = [
    'Didáctico',
    'Entretenido',
    'Con buen ambiente',
    'Equilibrio vida / trabajo',
    'Buen sueldo y posibilidad de subirlo',
  ];

  const trabajoIdealExamples = [
    'Reviews de código',
    'Comunicación',
    'Buenas prácticas',
    'Diferentes frameworks/proyectos',
    'Testing',
    'Remoto',
    'Sin horas extra',
    'Agile',
    'Buenos compañeros',
    'Aprender backend',
    'Revisiones salariales',
  ];
  return (
    <main className="flex min-h-screen flex-col bg-background text-text ">
      <Navbar />
      <div className=" mx-auto w-full px-4 py-4 md:px-16 lg:max-w-[80vw] lg:px-4 2xl:max-w-7xl">
        <HeroSection />
        <QualitySection />
        <MapSection />
        <WhyMeSection />
        <ExperienceSection />
        {/* CTA */}
        <ChatSection />
        <section className="my-8 grid gap-4 md:grid-cols-3">
          <h2 className="text-center text-xl font-bold">¿Con ganas de más?</h2>
          <div className="grid place-items-center rounded-lg bg-secondary p-6">
            <h3 className="mb-4 text-lg font-bold">
              Doble Grado Universitario
            </h3>
            <div className="flex gap-2">
              <Image
                className="m-auto w-12"
                alt="URJC logo"
                src="/URJC.svg"
                width={24}
                height={24}
              />
              <div>
                <p>Ingeniería Informática</p>
                <p>Ingeniería del Software</p>
              </div>
            </div>
          </div>
          <div className="grid place-items-center rounded-lg bg-secondary p-6">
            <h3 className="mb-4 text-lg font-bold">4 Idiomas</h3>
            <ul>
              <li>
                <span className="font-bold"> C1 Inglés</span> - Mayor nivel
                demostrable.
              </li>
              <li>
                <span className="font-bold">C1 Francés</span> - Honestamente, un
                poco oxidado.
              </li>
              <li>
                <span className="font-bold">Español</span> nativo
              </li>
              <li>
                2 años de clases de <span className="font-bold">japonés</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-border p-2">
            <p>Efecto chulo</p>
            <span>Hacer algo (esconder en movil)</span>
          </div>
        </section>
        <section className="my-8 flex flex-col gap-4">
          <h2 className="text-center text-xl font-bold">
            ¿Cómo es mi trabajo ideal?
          </h2>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <ul className="text-lg md:w-[30%] ">
              {trabajoIdealContent.map((text) => (
                <li key={text} className="flex items-center gap-2.5">
                  <FaCheck />
                  {text}
                </li>
              ))}
            </ul>
            <FaArrowDown className=" h-12 w-12 md:w-[20%] md:-rotate-90" />

            <div className="flex flex-wrap justify-around gap-2 md:w-[50%]">
              {trabajoIdealExamples.map((text) => (
                <Label key={text} text={text} />
              ))}
            </div>
          </div>
        </section>
        <section className="my-8 bg-white p-6 text-center text-black">
          <h3 className=" text-center font-bold">
            Como bien dicen las ofertas de trabajo:
          </h3>
          <p>No tienes por qué cumplir todos los requisitos.</p>
          <p>Si crees que tienes una buena oferta...</p>
          <button className="rounded-md border border-black px-3 py-1 font-bold">
            Háblame :&#41;
          </button>
        </section>
        <section className="my-8 flex flex-col gap-4">
          <h2 className="text-center text-xl font-bold">
            Preguntas frecuentes
          </h2>
          <Accordion />
        </section>
        <CreatedSection />
      </div>
    </main>
  );
}

const Label = ({ text }: { text: string }) => {
  const randomColor = Math.floor(Math.random() * 3);
  return (
    <div
      className={clsx(
        'rounded-md p-1 shadow-md',
        randomColor === 0 && 'shadow-green-600',
        randomColor === 1 && 'shadow-pink-600',
        randomColor === 2 && 'shadow-blue-600'
      )}
    >
      {text}
    </div>
  );
};
