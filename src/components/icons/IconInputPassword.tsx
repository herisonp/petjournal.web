import { cn } from '@/utils/twmerge';
import { IconProps } from './IconProps';
import Image from 'next/image';
import toggleShowPassword from '@/assets/svg/show-password.svg';
import toggleHiddenPassword from '@/assets/svg/hidden-password.svg';

export function IconInputPassword({
  size = 16,
  active = false,
  className,
}: IconProps) {
  return (
    <Image
      className={cn(className)}
      src={active ? toggleHiddenPassword : toggleShowPassword}
      width={size}
      height={size}
      alt="Ícone de olho para mostrar e esconder a senha"
    />
  );
}
