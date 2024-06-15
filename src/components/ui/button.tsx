import { ButtonHTMLAttributes, Ref, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonStyleBase =
  'flex self-center font-medium items-center justify-center rounded-[45px] px-11 py-3';

const buttonVariants = {
    variant: {
      default: `${buttonStyleBase} text-white bg-custom-purple disabled:bg-transparent disabled:border-2 disabled:border-[#B2B2B2] disabled:text-[#B2B2B2]`,
      outline: `${buttonStyleBase} bg-transparent border-2 border-red-600 text-red-600 disabled:opacity-45`,
      ghost: `bg-transparent`,
    },
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
}

export const Button = forwardRef(function Button(
  { variant = 'default', className, children, ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      ref={ref}
      className={`${buttonVariants.variant[variant]} ${twMerge(
        className,
      )}`}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
