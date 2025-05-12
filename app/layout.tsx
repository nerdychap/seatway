import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/contexts/cart-context';
import { ClerkProvider } from '@clerk/nextjs';
import { AuthRedirect } from '@/components/auth-redirect';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seatsway - Your Ticket Destination',
  description: 'Purchase tickets for your favorite events',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <AuthRedirect>{children}</AuthRedirect>
              </main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}