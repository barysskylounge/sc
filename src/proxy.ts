import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Extract subdomain (e.g., 'dashboard' from 'dashboard.couplesocials.com')
  // Handle both production and localhost cases
  let subdomain: string | null = null;

  if (hostname.includes('localhost')) {
    // For localhost, check if it's dashboard.localhost or app.localhost
    const parts = hostname.split('.');
    if (parts.length > 1 && parts[0] !== 'localhost') {
      subdomain = parts[0];
    }
  } else {
    // For production, extract subdomain (first part before first dot)
    const parts = hostname.split('.');
    // If there are more than 2 parts (e.g., dashboard.couplesocials.com), get the first part
    if (parts.length > 2) {
      subdomain = parts[0];
    }
  }

  // If subdomain is 'dashboard' or 'app', rewrite to dashboard routes
  if (subdomain === 'dashboard' || subdomain === 'app') {
    // If accessing root of subdomain, rewrite to /dashboard
    if (url.pathname === '/') {
      url.pathname = '/dashboard';
      return NextResponse.rewrite(url);
    }

    // Rewrite all subdomain requests to /dashboard/* routes
    if (!url.pathname.startsWith('/dashboard')) {
      url.pathname = `/dashboard${url.pathname}`;
    }

    return NextResponse.rewrite(url);
  }

  // For main domain, block direct access to /dashboard routes (optional security)
  // This ensures dashboard is only accessible via subdomain
  // Comment out the next 4 lines if you want to allow direct /dashboard access
  // COMMENTED OUT: Allowing direct access to /dashboard for demo purposes
  // if (url.pathname.startsWith('/dashboard') && subdomain !== 'dashboard' && subdomain !== 'app') {
  //   url.pathname = '/';
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

