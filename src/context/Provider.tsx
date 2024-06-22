'use client';
import { PetsContextProvider } from './PetsContext';
import { UserContextProvider } from './UserContext';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <UserContextProvider>
      <PetsContextProvider>{children}</PetsContextProvider>
    </UserContextProvider>
  );
}
