'use client';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="min-w-screen grid min-h-screen place-content-center bg-background text-text ">
      <h1 className="h1">Ups! Something went wrong</h1>
      <div className="mt-6">
        <Link
          href="/"
          className="mx-auto flex w-fit items-center gap-2 rounded-md border border-white bg-black p-2 hover:bg-white hover:text-black"
        >
          Home
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
