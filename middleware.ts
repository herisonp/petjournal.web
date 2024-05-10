import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const newURL = new URL('/login', request.url);
  if (request.nextUrl.pathname.includes('register')) {
    return NextResponse.redirect(newURL);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/register'],
};
