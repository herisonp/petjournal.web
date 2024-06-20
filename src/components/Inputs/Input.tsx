'use client';

import * as React from 'react';
import { IconInputPassword } from '../icons/IconInputPassword';
import { cn } from '@/utils/twmerge';
import { IconErrorCircle } from '../icons/IconErrorCircle';

const inputStyleBase =
  'flex w-full outline-0 text-[#292929] placeholder:text-[#BFBFBF] py-2 pl-1 pr-2';

const inputVariants = {
  variant: {
    primary: `border border-[#1b1b1b] font-medium rounded-[5px]`,
    secondary: `border-2 border-[#B2B2B2] border-dashed font-normal rounded-[12px]`,
  },
  error: {
    primary: `border border-red-300 font-medium rounded-[12px]`,
    secondary: `border border-red-300 font-medium rounded-[12px]`,
  },
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof typeof inputVariants.variant;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'primary', error = false, className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div
        className={cn(
          inputStyleBase,
          inputVariants.variant[variant],
          error && inputVariants.error[variant],
          className,
        )}
      >
        <input
          type={showPassword && type === 'password' ? 'text' : type}
          className="w-full outline-0"
          ref={ref}
          {...props}
        />

        {!error && type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
          >
            <IconInputPassword size={16} active={showPassword} />
          </button>
        )}

        {error && <IconErrorCircle size={20} />}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
