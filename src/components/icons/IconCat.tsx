import { cn } from '@/utils/twmerge';
import Image from 'next/image';
import iconCat from '../../assets/svg/cat.svg';
import { IconProps } from './IconProps';

export function IconCat({ size = 16, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconCat}
      width={size}
      height={size}
      alt=''
    />
  );
}
