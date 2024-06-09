import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconFemale from '../../assets/svg/female.svg';

export function IconFemale({
  size = 16,
  active = false,
  className,
}: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconFemale}
      width={size}
      height={size}
      alt=""
    />
  );
}
