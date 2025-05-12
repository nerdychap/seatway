'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Ticket, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

export function Navbar() {
  const { distinctItemCount } = useCart();
  
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Ticket className="h-6 w-6" />
          <span className="text-xl font-bold">Seatsway</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <Button variant="ghost" className="p-2">
              <ShoppingCart className="h-6 w-6" />
              {distinctItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {distinctItemCount}
                </span>
              )}
            </Button>
          </Link>
          
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: 'w-10 h-10'
                }
              }}
            />
          </SignedIn>
          
          <SignedOut>
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}