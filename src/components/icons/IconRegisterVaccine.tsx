import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconRegisterVaccine from '../../assets/svg/vaccine.svg';

export function IconRegisterVaccine({
  size = 16,
  active = false,
  className,
}: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconRegisterVaccine}
      width={size}
      height={size}
      alt=""
    />
  );
}
