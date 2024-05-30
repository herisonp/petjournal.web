import { User } from '@/types/userType';
import { Menubar } from './Menubar';

export function Header({ user }: { user: User }) {
  return (
    <header className="flex justify-between mb-4">
      <p>Olá, {user.firstName}!</p>
      <Menubar />
    </header>
  );
}
