import * as React from 'react';
import { cn } from '@/utils/twmerge';

const messageStyleBase =
  'w-full font-medium text-xs';

const messageVariants = {
  variant: {
    error: `${messageStyleBase} text-red-300`,
    warning: `${messageStyleBase} text-gray-300`
  },
};

interface InputMessageProps {
   message?: string;
   variant?: keyof typeof messageVariants.variant;
   className?: string;
}

const InputMessage = ({ message, variant = 'error', className } : InputMessageProps) => {
   return (
      <span className={cn(messageVariants.variant[variant], className)}>{message}</span>
   ) 
}

export { InputMessage }