import { cn } from '@/utils/twmerge';
import Image from 'next/image';
import iconSearchService from '../../assets/svg/search.svg';
import { IconProps } from './IconProps';

export function IconSearchService({ size = 16, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconSearchService}
      width={size}
      height={size}
      alt=''
    />
  );
}
