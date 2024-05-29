import { type NextRequest } from 'next/server';

export function isProtectedRoutes(request: NextRequest) {
  const protectedRoutes = [
    '/',
    '/pets',
    '/register-pet',
    '/tutor',
    'change-password',
  ];
  const { pathname } = request.nextUrl;
  const isProtectedRoute = protectedRoutes.some((path) => pathname === path);
  console.log(isProtectedRoute);
  return isProtectedRoute;
}
