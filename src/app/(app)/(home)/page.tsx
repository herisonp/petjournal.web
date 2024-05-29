import Link from 'next/link';
import { BannerHome } from './components/BannerHome';
import { Header } from '../components/Header';
import { Services } from './components/Services';
import { getSession } from '@/services/getSession';
import { User } from '@/types/userType';

export default async function DashboardPage() {
  const { session } = await getSession();
  const user = session?.user!;
  return (
    <>
      <Header user={user} />
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
