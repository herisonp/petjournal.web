'use client';
import { signOut } from '@/services/signOut';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSignOut() {
    try {
      setIsLoading(true);
      const { error } = await signOut();
      if (error) throw error;
      router.refresh();
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      onClick={handleSignOut}
      disabled={isLoading}
      className="flex gap-2 items-center"
    >
      <span>Sair</span> <LogOut size={14} />
    </button>
  );
}
