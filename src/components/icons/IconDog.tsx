import { cn } from '@/utils/twmerge';
import Image from 'next/image';
import iconDog from '../../assets/svg/dog.svg';
import { IconProps } from './IconProps';

export function IconDog({ size = 16, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconDog}
      width={size}
      height={size}
      alt=''
    />
  );
}
