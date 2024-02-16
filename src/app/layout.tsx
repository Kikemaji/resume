import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Enrique Márquez Jiménez',
  description: 'Curriculum interactivo de Enrique Márquez Jiménez',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
