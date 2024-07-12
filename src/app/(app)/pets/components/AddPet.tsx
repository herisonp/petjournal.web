import Link from "next/link";
import Button from '@/assets/svg/button.svg';
import Image from "next/image";

type AddPetTypes = {
  href: string;
}

export function AddPet({ href }: AddPetTypes) {
  return (
    <div className="fixed z-10 bottom-28 right-4 w-14 h-14 flex justify-center items-center rounded-full bg-[#7C54A7]">
      <Link href={href}>
        <Image src={Button} alt="botão de adicionar um novo pet" />
      </Link>
    </div>
  )
}