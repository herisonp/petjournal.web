'use client';
import { Menubar } from './Menubar';
import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';

export function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className="flex justify-between mb-4">
      <p>Olá, {user?.firstName}!</p>
      <Menubar />
    </header>
  );
}
