'use client';

import * as React from 'react';
import { IconInputPassword } from './icons/IconInputPassword';
import { cn } from '@/utils/twmerge';

const inputStyleBase =
  'w-full outline-0 text-[#292929] placeholder:text-[#BFBFBF] py-2 pl-1 pr-2';

const inputVariants = {
  variant: {
    primary: `${inputStyleBase} border border-[#1b1b1b] font-medium rounded-[5px]`,
    secondary: `${inputStyleBase} border-2 border-[#B2B2B2] border-dashed font-normal rounded-[12px]`,
  },
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof typeof inputVariants.variant;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'primary', className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return type !== 'password' ? (
      <input
        type={type}
        className={cn(inputVariants.variant[variant], className)}
        ref={ref}
        {...props}
      />
    ) : (
      <div className={cn('flex', inputVariants.variant[variant], className)}>
        <input
          type={showPassword && type === 'password' ? 'text' : type}
          className="w-full outline-0"
          ref={ref}
          {...props}
        />

        <button
          type="button"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
        >
          <IconInputPassword size={16} active={showPassword} />
        </button>
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
