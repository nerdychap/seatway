"use client";

import { useCart } from "@/contexts/cart-context";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Navbar() {
  const { distinctItemCount } = useCart();

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors">
            Seatsway
          </span>
        </Link>
        <div className="ml-auto flex items-center space-x-3 sm:space-x-4">
          <Link
            href="/checkout"
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {distinctItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow">
                {distinctItemCount}
              </span>
            )}
          </Link>

          <SignedIn>
            <Link
              href="/events/create-event"
              className="px-3 py-2 sm:px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors"
            >
              Create Event
            </Link>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-3 py-2 sm:px-4 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-md transition-colors">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
