import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';
import '@/styles/globals.css';

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
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
