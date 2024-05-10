'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomTab() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 bg-custom-purple w-full p-4">
      <ul className="flex w-full justify-around">
        <li>
          <Link
            href={'/'}
            className={`${
              pathname === '/' ? 'text-custom-blue' : 'text-white'
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={'/pets'}
            className={`${
              pathname === '/pets' ? 'text-custom-blue' : 'text-white'
            }`}
          >
            Pets
          </Link>
        </li>
        <li>
          <Link
            href={'/tutor'}
            className={`${
              pathname === '/tutor' ? 'text-custom-blue' : 'text-white'
            }`}
          >
            Tutor
          </Link>
        </li>
      </ul>
    </div>
  );
}
