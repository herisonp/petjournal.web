import { cn } from '@/utils/twmerge';
import Image from 'next/image';
import iconMedicalDrops from '../../assets/svg/medical-drops.svg';
import { IconProps } from './IconProps';

export function IconMedicalDrops({ size = 16, className }: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconMedicalDrops}
      width={size}
      height={size}
      alt=''
    />
  );
}
