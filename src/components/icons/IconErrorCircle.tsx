import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconErrorCircle from '../../assets/svg/error-circle.svg';

export function IconErrorCircle({
  size = 16,
  active = false,
  className,
}: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconErrorCircle}
      width={size}
      height={size}
      alt=""
    />
  );
}
