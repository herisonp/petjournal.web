import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconDog from '../../assets/svg/dog.svg';

export function IconDog({ size = 16, active = false, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconDog}
      width={size}
      height={size}
      alt=""
    />
  );
}
