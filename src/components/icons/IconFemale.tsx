import { cn } from '@/utils/twmerge';
import Image from 'next/image';
import iconFemale from '../../assets/svg/female.svg';
import { IconProps } from './IconProps';

export function IconFemale({ size = 16, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconFemale}
      width={size}
      height={size}
      alt=''
    />
  );
}
