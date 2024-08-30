'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/Breadcrump';
import { Button } from '@/components/Button';
import { Input } from '@/components/Fields/Input';
import { InputControl } from '@/components/Fields/InputControl';
import { Label } from '@/components/Label';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useContext } from 'react';
import { PetRegisterContext } from '../context/PetRegisterContext';
import { usePetRegisterSteps } from './usePetRegisterSteps';

export function DateBirth() {
  const { newPet } = useContext(PetRegisterContext);
  const { error, clickPreviousStep, setError, pet, setPet, sendNewPet } =
    usePetRegisterSteps();
  const router = useRouter();

  async function handleClickNextStep() {
    setError(false);
    if (!pet.dateOfBirth) {
      sendNewPet(null);
      return;
    }

    const res = await sendNewPet({
      ...newPet,
      dateOfBirth: new Date(pet.dateOfBirth),
    });

    if (res) {
      router.push('/pets');
    }
  }

  function handleClickPreviousStep() {
    setError(false);
    clickPreviousStep();
  }

  function handleOnChangeDateOfBirth(evt: ChangeEvent<HTMLInputElement>) {
    setError(false);
    const { value } = evt.target;

    setPet(state => ({
      ...state,
      dateOfBirth: value,
    }));
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/home.svg'
                  height={15}
                  width={13}
                  alt='Home Icon'
                />{' '}
                Cadastro Pet
              </div>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Raça</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Porte</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Nascimento</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3 className='text-xl font-medium text-left text-studio-600 w-full'>
        Qual a data de nascimento de {pet.petName}?
      </h3>

      <p className='flex flex-col gap-4 text-zinc-800'>
        <span className='block'>
          Caso {pet.petName} tenha sido adotado, e você não saiba a data certa,
          não se preocupe!
        </span>

        <span className='block'>
          Você pode adicionar apenas a data aproximada que você se lembra!
        </span>
      </p>

      <InputControl className='w-full'>
        <Label variant='secondary' htmlFor='dateOfBirth' className='text-base'>
          Data de nascimento
        </Label>
        <Input
          type='date'
          name='dateOfBirth'
          id='dateOfBirth'
          placeholder='Nome de seu Pet'
          variant='secondary'
          className='bg-white'
          defaultValue={pet.dateOfBirth as string}
          onChange={handleOnChangeDateOfBirth}
          required
        />
        <span className='text-gray-400'>*Campo obrigatório</span>
      </InputControl>

      {error && (
        <span className='text-red-400 text-sm text-center'>
          Selecione e preencha todas as informações
        </span>
      )}

      <div className='mt-auto w-full flex justify-around'>
        <Button
          variant='outline'
          className='font-bold'
          onClick={handleClickPreviousStep}
        >
          Voltar
        </Button>
        <Button className='font-bold' onClick={handleClickNextStep}>
          Continuar
        </Button>
      </div>
    </>
  );
}
