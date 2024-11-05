// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const siteConfigs = {
  'leroi': {
    brandName: 'Leroi',
    brandColor: '#FF0000'
  },
  'compair': {
    brandName: 'Compair',
    brandColor: '#0000FF'
  },
  'default': {
    brandName: 'Default',
    brandColor: '#000000'
  }
} as const;

export function middleware(request: NextRequest) {
  const { headers } = request;
  const host = headers.get('host') || '';
  let currentSite = 'default';

  // Check URL path for testing in Vercel deployment
  const url = request.nextUrl;
  if (url.pathname.startsWith('/leroi')) {
    currentSite = 'leroi';
  } else if (url.pathname.startsWith('/compair')) {
    currentSite = 'compair';
  } else if (host.includes('leroi')) {
    currentSite = 'leroi';
  } else if (host.includes('compair')) {
    currentSite = 'compair';
  }

  const response = NextResponse.next();
  const config = siteConfigs[currentSite as keyof typeof siteConfigs];
  response.headers.set('x-site-config', JSON.stringify(config));

  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
