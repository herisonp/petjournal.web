'use client';

import * as React from 'react';

import toggleShowPassword from '@/assets/svg/show-password.svg';
import toggleHiddenPassword from '@/assets/svg/hidden-password.svg';

import { cn } from '@/utils/twmerge';
import Image from 'next/image';

const inputStyleBase = 'w-full flex py-2 px-1';

const inputVariants = {
  variant: {
    default: `${inputStyleBase} border border-[#1b1b1b] font-medium rounded-[5px]`,
    secondary: `${inputStyleBase} border-2 border-[#B2B2B2] border-dashed font-normal rounded-[12px] pl-2`,
  },
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: keyof typeof inputVariants.variant;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const labelStyleBase = 'text-sm font-medium';

const labelVariants = {
  variant: {
    default: `${labelStyleBase} text-custom-purple`,
    secondary: `${labelStyleBase} text-[#2E2E2E] pl-2`,
  },
};

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
  ({ variant = 'default', className, type, id, label, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="flex flex-col">
        <Label htmlFor={id} className={labelVariants.variant[variant]}>
          {label}
        </Label>

        <div className={inputVariants.variant[variant]}>
          <input
            type={showPassword && type === 'password' ? 'text' : type}
            className={cn(
              `w-full outline-0 text-[#292929] placeholder:text-[#BFBFBF] ${
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
                alt="Ícone de olho para mostrar e esconder a senha"
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
