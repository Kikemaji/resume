import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaCamera, FaMicrophone } from 'react-icons/fa6';

const ChatSection = () => {
  return (
    <section className="my-8 flex flex-col items-center gap-4">
      <h2 className=" h2 font-bold">Habla conmigo directamente</h2>
      <div className=" max-w-[640px] rounded-lg border-2 border-border">
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

          <p className="ml-auto w-fit max-w-[70%] rounded-2xl bg-[#00D5CD] p-2 text-black">
            Me encanta aprender nuevas tecnologías! Hace el trabajo más
            interesante
          </p>
          <p className="ml-auto w-fit max-w-[70%] rounded-2xl bg-[#00D5CD] p-2 text-black">
            Por ejemplo, Node, AWS, testing, Vue...
          </p>
          <div className="flex items-end gap-1">
            <FaUserCircle className="mb-1 h-5 w-5" />
            <p className="mr-auto w-fit max-w-[70%] rounded-2xl bg-[#343434] p-2 ">
              También necesitamos que sepas resolver los problemas por tu cuenta
            </p>
          </div>
          <p className="ml-auto w-fit max-w-[70%] rounded-2xl bg-[#00D5CD] p-2 text-black">
            Hecho! Me entretiene bastante cuando tengo un problema complejo que
            resolver
          </p>
          <div className="flex items-end gap-1">
            <FaUserCircle className="mb-1 h-5 w-5" />
            <p className="mr-auto w-fit max-w-[70%] rounded-2xl bg-[#343434] p-2 ">
              Me gusta tu actitud, mándame tu CV y agendamos la primera
              entrevista
            </p>
          </div>
          <p className="ml-auto w-fit max-w-[70%] rounded-2xl bg-[#00D5CD] p-2 text-end text-black">
            Genial :&#41;
          </p>
          <p className="ml-auto w-fit max-w-[70%] rounded-2xl bg-[#00D5CD] p-2 text-end text-black">
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
  );
};

export default ChatSection;
