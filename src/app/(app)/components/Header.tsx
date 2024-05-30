'use client';
import { User } from '@/types/userType';
import { getSession } from '@/services/getSession';
import { Menubar } from './Menubar';
import { useEffect, useState } from 'react';

export function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const { session } = await getSession();
      if (session) {
        setUser(session.user);
      }
      return;
    })();
  }, []);
  return (
    <header className="flex justify-between mb-4">
      <p>Olá, {user?.firstName ?? 'Usuário'}!</p>
      <Menubar />
    </header>
  );
}
