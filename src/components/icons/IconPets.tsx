import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconPets from '../../assets/svg/pets.svg';
import iconPetsActive from '../../assets/svg/pets-active.svg';

export function IconPets({ size = 16, active = false, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={active ? iconPetsActive : iconPets}
      width={size}
      height={size}
      alt=''
    />
  );
}
