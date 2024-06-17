'use client';
import { PetsContextProvider } from './PetsContext';

export function Provider({ children }: { children: React.ReactNode }) {
  return <PetsContextProvider>{children}</PetsContextProvider>;
}
