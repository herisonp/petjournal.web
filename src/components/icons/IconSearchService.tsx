import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconSearchService from '../../assets/svg/search.svg';

export function IconSearchService({
  size = 16,
  active = false,
  className,
}: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconSearchService}
      width={size}
      height={size}
      alt=""
    />
  );
}
