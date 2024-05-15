import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconCalendar from '../../assets/svg/calendar.svg';

export function IconCalendar({
  size = 16,
  active = false,
  className,
}: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconCalendar}
      width={size}
      height={size}
      alt=""
    />
  );
}
