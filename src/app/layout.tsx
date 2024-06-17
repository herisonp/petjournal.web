import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';
import '@/styles/globals.css';
import { Provider } from '@/context/Provider';

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
});

export const metadata: Metadata = {
  title: 'PetJournal',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`min-h-screen ${fredoka.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
