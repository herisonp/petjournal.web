import { cn } from '@/utils/twmerge';
import Image from 'next/image';
import iconMale from '../../assets/svg/male.svg';
import { IconProps } from './IconProps';

export function IconMale({ size = 16, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconMale}
      width={size}
      height={size}
      alt=''
    />
  );
}
