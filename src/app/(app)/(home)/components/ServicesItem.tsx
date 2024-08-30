import { cn } from '@/utils/twmerge';
import Link, { LinkProps } from 'next/link';

interface ServicesItemProps extends LinkProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
}

export function ServicesItem({
  className,
  title,
  children,
  ...props
}: ServicesItemProps) {
  return (
    <li
      className={cn(
        'text-white flex flex-col justify-center items-center rounded-lg p-4',
        className,
      )}
    >
      <Link
        {...props}
        className='flex flex-col justify-center items-center w-full h-full text-center'
      >
        {children}
        <span className='text-center'>{title}</span>
      </Link>
    </li>
  );
}
