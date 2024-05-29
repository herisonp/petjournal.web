import { User } from '@/types/userType';

export function Header({ user }: { user: User }) {
  return (
    <header className="flex justify-between mb-4">
      <p>Olá, {user.firstName}!</p>
      <div>{'{ tabicon }'}</div>
    </header>
  );
}
