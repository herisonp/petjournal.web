import { cn } from '@/utils/twmerge';
import Image from 'next/image';
import iconMenuburger from '../../assets/svg/menu-burger.svg';
import { IconProps } from './IconProps';

export function IconMenuburger({ size = 16, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconMenuburger}
      width={size}
      height={size}
      alt=''
    />
  );
}
