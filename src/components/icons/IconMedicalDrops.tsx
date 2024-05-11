import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import iconMedicalDrops from '../../assets/svg/medical-drops.svg';

export function IconMedicalDrops({
  size = 16,
  active = false,
  className,
}: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={iconMedicalDrops}
      width={size}
      height={size}
      alt=""
    />
  );
}
