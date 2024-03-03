import Image from 'next/image';
import React from 'react';
import styles from './SpinningContent.module.css';
import clsx from 'clsx';

function SpinningText({ children }: { children: React.ReactNode }) {
  const icons: JSX.Element[] = [
    <Image
      key={0}
      className="h-10 w-10 invert"
      alt="NextJS icon"
      src="/next.svg"
      width={24}
      height={24}
    />,
    <Image
      key={1}
      className="h-10 w-10"
      alt="ReactJS icon"
      src="/react.svg"
      width={24}
      height={24}
    />,
    <Image
      key={2}
      className="w-8"
      alt="Typescript icon"
      src="/typescript.svg"
      width={24}
      height={24}
    />,
    // <Image
    //   key={3}
    //   className="w-10"
    //   alt="Tailwind CSS icon"
    //   src="/tailwind.svg"
    //   width={40}
    //   height={24}
    // />,
    <Image
      key={4}
      className="w-8"
      alt="Javascript icon"
      src="/javascript.svg"
      width={24}
      height={24}
    />,
    <Image
      key={1}
      className="h-10 w-10"
      alt="Angular icon"
      src="/angular.svg"
      width={24}
      height={24}
    />,
    <Image
      key={1}
      className="h-10 w-10"
      alt="CSS icon"
      src="/css.svg"
      width={24}
      height={24}
    />,
    <Image
      key={1}
      className="h-10 w-10"
      alt="HTML5 icon"
      src="/html.svg"
      width={24}
      height={24}
    />,
  ];
  const lenght = icons.length;
  const deg = 360 / lenght;

  return (
    <div className="relative grid aspect-square h-[300px] place-items-center rounded-full md:h-[400px]">
      <div
        className={clsx(
          styles.animateSpinIcons,
          'absolute m-0 h-full w-full rounded-full'
        )}
      >
        {icons.map((icon, i) => (
          <span
            className="absolute left-1/2 top-0 origin-[0px_150px] md:origin-[0px_200px]"
            key={i}
            style={{
              transform: `rotate(${deg * i}deg)`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>
      {children}
    </div>
  );
}

export default SpinningText;
