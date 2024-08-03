import { cn } from '@/utils/twmerge';
import * as React from 'react';

const labelStyleBase = 'text-sm font-medium';

const labelVariants = {
  variant: {
    primary: `${labelStyleBase} text-studio-600`,
    secondary: `${labelStyleBase} text-[#2E2E2E]`,
  },
};

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant?: keyof typeof labelVariants.variant;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ variant = 'primary', htmlFor, className, children, ...props }, ref) => {
    return (
      <label
        className={cn(labelVariants.variant[variant], className)}
        htmlFor={htmlFor}
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
