import { cn } from '@/utils/twmerge';
import Image from 'next/image';
import iconCalendar from '../../assets/svg/calendar.svg';
import { IconProps } from './IconProps';

export function IconCalendar({ size = 16, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconCalendar}
      width={size}
      height={size}
      alt=''
    />
  );
}
