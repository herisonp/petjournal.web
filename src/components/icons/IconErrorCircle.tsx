import { cn } from '@/utils/twmerge';
import Image from 'next/image';
import iconErrorCircle from '../../assets/svg/error-circle.svg';
import { IconProps } from './IconProps';

export function IconErrorCircle({ size = 16, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconErrorCircle}
      width={size}
      height={size}
      alt=''
    />
  );
}
