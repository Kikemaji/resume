import Link from 'next/link';
import '@/app/globals.css';
import { FaArrowRight } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-w-screen grid min-h-screen place-content-center bg-background text-text ">
      <h1 className="h1">404 - Not found</h1>
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
}
