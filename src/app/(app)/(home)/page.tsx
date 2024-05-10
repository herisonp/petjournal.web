import Link from 'next/link';
import { BannerHome } from './components/BannerHome';
import { Header } from '../components/Header';

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
        <ul className="grid grid-cols-2">
          <li>Agenda</li>
          <li>Localizar Serviços</li>
          <li>Registro de Vacinas</li>
          <li>Registro de Vermífugos</li>
        </ul>
      </main>
    </>
  );
}
