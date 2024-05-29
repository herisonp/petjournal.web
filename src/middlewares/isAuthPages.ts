import { type NextRequest } from 'next/server';

export function isAuthPages(request: NextRequest) {
  const { pathname } = request.nextUrl;
  return pathname === '/login' || pathname === '/register';
}
