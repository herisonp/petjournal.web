import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconTutor from '../../assets/svg/tutor.svg';
import iconTutorActive from '../../assets/svg/tutor-active.svg';

export function IconTutor({ size = 16, active = false, className }: IconProps) {
  return (
    <Image
      className={cn(`object-contain w-[${size}px] h-[${size}px]`, className)}
      src={active ? iconTutorActive : iconTutor}
      width={size}
      height={size}
      alt=''
    />
  );
}
