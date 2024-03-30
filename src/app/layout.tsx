import type { Metadata } from 'next';
import '@/app/globals.css';
export const metadata: Metadata = {
  title: 'Enrique Márquez Jiménez',
  description: 'Portfolio de Enrique Márquez Jiménez',
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
