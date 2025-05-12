'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { useCart } from '@/contexts/cart-context';

export default function CheckoutForm({ eventId }: { eventId: string }) {
  const router = useRouter();
  const { clearCart } = useCart();
  const { isSignedIn, user } = useUser();
  const [userDetails, setUserDetails] = useState<any>(null);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Retrieve user details from localStorage
  useEffect(() => {
    const storedDetails = localStorage.getItem('userCheckoutDetails');
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails));
    }
  }, []);

  const handlePayment = () => {
    setPaymentProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  const handleCloseSuccess = () => {
    clearCart();
    router.push('/');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Complete Your Payment</h1>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Customer Details</CardTitle>
        </CardHeader>
        <CardContent>
          {userDetails ? (
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> {userDetails.firstName} {userDetails.lastName}</p>
              <p><span className="font-medium">Email:</span> {userDetails.email}</p>
              <p><span className="font-medium">Phone:</span> {userDetails.phone}</p>
            </div>
          ) : (
            <p>No customer details available.</p>
          )}
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Payment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Click the button below to process your payment securely.</p>
          <Button 
            onClick={handlePayment} 
            disabled={paymentProcessing || !userDetails}
            className="w-full"
          >
            {paymentProcessing ? 'Processing...' : 'Pay Now'}
          </Button>
          {!userDetails && (
            <p className="text-red-500 text-sm mt-2">
              Please complete your details in the previous step before payment.
            </p>
          )}
        </CardContent>
      </Card>

      <Dialog open={paymentSuccess} onOpenChange={setPaymentSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Successful!</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Thank you for your purchase. Your tickets will be sent to {userDetails?.email}.</p>
          </div>
          <DialogFooter>
            <Button onClick={handleCloseSuccess}>Return to Home</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}