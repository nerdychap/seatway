'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

// List of public routes that don't require authentication
const PUBLIC_ROUTES = ['/', '/events', '/sign-in', '/sign-up'];

export function AuthRedirect({ children }: { children: React.ReactNode }) {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoaded) return;

    const isPublicRoute = PUBLIC_ROUTES.some(route => 
      pathname === route || pathname.startsWith(`${route}/`)
    );

    if (!userId && !isPublicRoute) {
      // Redirect to sign-in with the current URL as redirect_url
      const redirectUrl = encodeURIComponent(window.location.href);
      router.push(`/sign-in?redirect_url=${redirectUrl}`);
    }
  }, [isLoaded, userId, pathname, router]);

  return <>{children}</>;
}