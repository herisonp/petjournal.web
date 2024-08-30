import { cn } from '@/utils/twmerge';
import Image from 'next/image';
import iconArrow from '../../assets/svg/arrow.svg';
import { IconProps } from './IconProps';

export function IconArrow({ size = 16, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconArrow}
      width={size}
      height={size}
      alt=''
    />
  );
}
