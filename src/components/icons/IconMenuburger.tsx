import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconMenuburger from '../../assets/svg/menu-burger.svg';

export function IconMenuburger({
  size = 16,
  active = false,
  className,
}: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconMenuburger}
      width={size}
      height={size}
      alt=""
    />
  );
}
