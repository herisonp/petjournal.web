'use client';

import * as React from 'react';

import toggleShowPassword from '@/assets/svg/show-password.svg';
import toggleHiddenPassword from '@/assets/svg/hidden-password.svg';

import { cn } from '@/utils/twmerge';
import Image from 'next/image';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, children, ...props }, ref) => {
    return (
      <label htmlFor={htmlFor} ref={ref} {...props}>
        {children}
      </label>
    );
  },
);
Label.displayName = 'Label';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, label, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="flex flex-col">
        {label && (
          <Label
            htmlFor={id}
            className={cn('text-custom-purple text-sm font-medium')}
          >
            {label}
          </Label>
        )}
        <div className="border border-[#1b1b1b] rounded-[5px] flex py-2 px-1">
          <input
            type={showPassword && type === 'password' ? 'text' : type}
            className={cn(
              `w-full outline-0 text-[#292929] font-medium placeholder:text-[#BFBFBF] ${
                !showPassword && 'text-[#BFBFBF]'
              }`,
              className,
            )}
            ref={ref}
            {...props}
          />

          {type === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={cn('px-1')}
              aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
            >
              <Image
                src={showPassword ? toggleShowPassword : toggleHiddenPassword}
                alt="Ícone de olho para mostrar e es conder a senha"
              />
            </button>
          )}
        </div>
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
