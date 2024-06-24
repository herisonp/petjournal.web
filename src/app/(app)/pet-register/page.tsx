'use client';
import { PetRegister } from './components/PetRegister';
import { PetRegisterContextProvider } from './context/PetRegisterContext';

export default function PetRegisterPage() {
  return (
    <PetRegisterContextProvider>
      <PetRegister />
    </PetRegisterContextProvider>
  );
}
