import Link from "next/link";

type AddPetTypes = {
  href: string;
}

export function AddPet({ href }: AddPetTypes) {
  return (
    <Link href={href} className="w-14 h-14 rounded-full flex justify-center items-center absolute bottom-24 right-4 bg-[#7C54A7]">
      <span className="text-4xl text-white font-normal">+</span>
    </Link>
  )
}