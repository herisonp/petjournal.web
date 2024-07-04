import Link from 'next/link';
import { BannerHome } from './components/BannerHome';
import { Header } from '../components/Header';
import { Services } from './components/Services';
import { SearchInput } from '@/components/Fields/SearchInput';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 w-full">
        <BannerHome />
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-lg">Serviços</h2>
          <Link href="#">ver mais</Link>
        </div>
        <SearchInput placeholder='Teste' items={[{label: 'Cachorro', value: 'Cachorro'},{label: 'Gato', value: 'Gato'},{label: 'Cachorro Grande', value: 'Cachorro Grande'},{label: 'Cachorro Pequeno', value: 'Cachorro Pequeno'},{label: 'Cachorro Médio', value: 'Cachorro Médio'}]}/>
        <Services />
      </main>
    </>
  );
}
