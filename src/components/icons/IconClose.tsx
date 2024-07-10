import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconClose from '../../assets/svg/close.svg';

export function IconClose({ size = 16, active = false, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconClose}
      width={size}
      height={size}
      alt=""
    />
  );
}
