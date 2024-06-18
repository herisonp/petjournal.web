import * as React from 'react';
import { cn } from '@/utils/twmerge';

const errorStyleBase =
  'w-full font-medium text-xs';

const errorVariants = {
  variant: {
    red: `${errorStyleBase} text-red-600`,
    transparent: `${errorStyleBase} text-gray-300`
  },
};

interface ErrorMessageProps {
   message?: string;
   variant?: keyof typeof errorVariants.variant;
   className?: string;
}

const ErrorMessage = ({ message, variant = 'red', className } : ErrorMessageProps) => {
   return (
      <span className={cn(errorVariants.variant[variant], className)}>{message}</span>
   ) 
}

export { ErrorMessage }