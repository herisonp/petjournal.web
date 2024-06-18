import { Logo } from '@/components/Logo';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <Logo
       scale='lg'
      />
      <h2 className="font-medium text-2xl text-center">
        Página não encontrada...
      </h2>
      <p className="text-center">
        Não conseguimos encontrar a página solicitada...
      </p>
      <Link href="/" className="text-custom-purple font-medium mt-8">
        Clique aqui para retornar para home
      </Link>
    </div>
  );
}
