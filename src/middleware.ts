import { NextResponse, type NextRequest } from 'next/server';
import { isAuthPages } from './middlewares/isAuthPages';
import { isAuthvalid } from './middlewares/isAuthValid';
import { isProtectedRoutes } from './middlewares/isProtectedRoutes';
import { isWaitingCodeMiddleware } from './middlewares/isWaitingCodeMiddleware';

export async function middleware(request: NextRequest) {
  const authenticated = await isAuthvalid();
  if (isWaitingCodeMiddleware(request)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (!authenticated && isProtectedRoutes(request)) {
    return NextResponse.rewrite(new URL('/login', request.url));
  }
  if (authenticated && isAuthPages(request)) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
