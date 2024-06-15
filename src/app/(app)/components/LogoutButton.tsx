'use client';
import { Button } from '@/components/Button';
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
    <Button
      onClick={handleSignOut}
      disabled={isLoading}
      className="gap-2 py-0 px-0 font-normal disabled:opacity-45 disabled:border-none"
    >
      <span>Sair</span> <LogOut size={14} />
    </Button>
  );
}
