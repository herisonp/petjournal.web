import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconCat from '../../assets/svg/cat.svg';

export function IconCat({ size = 16, active = false, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconCat}
      width={size}
      height={size}
      alt=""
    />
  );
}
