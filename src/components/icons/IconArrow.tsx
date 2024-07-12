import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconArrow from '../../assets/svg/arrow.svg';

export function IconArrow({ size = 16, active = false, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconArrow}
      width={size}
      height={size}
      alt=""
    />
  );
}
