'use server';
import { type NextRequest } from 'next/server';

export function isWaitingCodeMiddleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;
  return pathname === '/waiting-code' && !searchParams.get('email');
}
