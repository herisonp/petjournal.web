import { cn } from '@/utils/twmerge';
import Image, { ImageProps } from 'next/image';
import { Ref, forwardRef } from 'react';

const logoVariants = {
  scale: {
    default: {
      width: 37,
      height: 36.42,
    },
    md: {
      width: 76,
      height: 76,
    },
    lg: {
      width: 158,
      height: 158,
    },
    xl: {
      width: 201.74,
      height: 171,
    },
    '2xl': {
      width: 342.13,
      height: 290,
    },
  },
};

export interface LogoProps {
  scale?: keyof typeof logoVariants.scale;
  className?: string;
}

export function Logo({ scale = 'default', className }: LogoProps) {
  return (
    <Image
      src="/images/logo.svg"
      height={logoVariants.scale[scale].height}
      width={logoVariants.scale[scale].width}
      alt="Pet Journal Logo"
      className={className}
    />
  );
}
