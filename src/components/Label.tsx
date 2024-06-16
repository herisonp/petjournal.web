import { cn } from '@/utils/twmerge';
import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant?: keyof typeof labelVariants.variant;
}

const labelStyleBase = 'text-sm font-medium';

const labelVariants = {
  variant: {
    primary: `${labelStyleBase} text-custom-purple`,
    secondary: `${labelStyleBase} text-[#2E2E2E]`,
  },
};

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, variant = 'primary', className, children, ...props }, ref) => {
    return (
      <label
        htmlFor={htmlFor}
        className={(cn(labelVariants.variant[variant]), className)}
        ref={ref}
        {...props}
      >
        {children}
      </label>
    );
  },
);
Label.displayName = 'Label';

export { Label };
