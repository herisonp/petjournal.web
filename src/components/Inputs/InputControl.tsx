import { cn } from '@/utils/twmerge';

interface InputControlProps {
  children: React.ReactNode;
  className: string;
}

const InputControl = ({ children, className }: InputControlProps) => {
  return <div className={cn('flex flex-col gap-1', className)}>{children}</div>;
};

export { InputControl };
