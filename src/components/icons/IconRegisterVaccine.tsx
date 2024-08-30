import { cn } from '@/utils/twmerge';
import Image from 'next/image';
import iconRegisterVaccine from '../../assets/svg/vaccine.svg';
import { IconProps } from './IconProps';

export function IconRegisterVaccine({ size = 16, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconRegisterVaccine}
      width={size}
      height={size}
      alt=''
    />
  );
}
