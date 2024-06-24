import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconMale from '../../assets/svg/male.svg';

export function IconMale({ size = 16, active = false, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconMale}
      width={size}
      height={size}
      alt=""
    />
  );
}
