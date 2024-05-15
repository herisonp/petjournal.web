import Link from 'next/link';
import { BannerHome } from './components/BannerHome';
import { Header } from '../components/Header';
import { Services } from './components/Services';

// tela de ambiente de usuário (home)
export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 w-full">
        <BannerHome />
        <div className="flex justify-between">
          <h2>Serviços</h2>
          <Link href="#">ver mais</Link>
        </div>
        <Services />
      </main>
    </>
  );
}
