'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/cart-context';
import { ShoppingCart, Plus, Minus, X, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { UserDetailsForm, UserFormValues } from '@/components/user-details-form';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();
  const [userDetails, setUserDetails] = useState<UserFormValues | null>(null);

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any tickets to your cart yet.</p>
          <Button onClick={() => router.push('/')}>Browse Events</Button>
        </div>
      </div>
    );
  }

  const handleUserDetailsSubmit = (values: UserFormValues) => {
    setUserDetails(values);
    // Store user details in localStorage or context for use in payment page
    localStorage.setItem('userCheckoutDetails', JSON.stringify(values));
    router.push('/checkout/payment');
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
      variant: "default",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <Button 
          variant="destructive"
          style={{ backgroundColor: '#dc2626', color: 'white' }}
          className="flex items-center gap-2 font-medium shadow-sm"
          onClick={handleClearCart}
        >
          <Trash2 className="h-4 w-4" />
          Clear Cart
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Items ({items.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 py-4 border-b last:border-0">
                  <div className="h-20 w-20 overflow-hidden rounded-md">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.title}</h3>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <p>{item.title}</p>
                      <p className="text-muted-foreground">R{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-3 font-medium">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Details</CardTitle>
            </CardHeader>
            <CardContent>
              <SignedIn>
                <UserDetailsForm onSubmit={handleUserDetailsSubmit} />
              </SignedIn>
              <SignedOut>
                <div className="text-center py-6">
                  <p className="mb-4">Please sign in to continue with your purchase</p>
                  <Button onClick={() => router.push('/sign-in?redirect_url=' + encodeURIComponent('/checkout'))}>
                    Sign In
                  </Button>
                </div>
              </SignedOut>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between py-2">
                  <span>Subtotal</span>
                  <span>R{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Tax (10%)</span>
                  <span>R{(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 font-bold">
                  <span>Total</span>
                  <span>R{(totalPrice * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}