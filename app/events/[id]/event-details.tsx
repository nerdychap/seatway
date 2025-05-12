"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, CheckCircle } from "lucide-react";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  price: number;
  image: string;
};

export default function EventDetails({
  eventId,
  initialEvent,
}: {
  eventId: string;
  initialEvent: Event;
}) {
  const router = useRouter();
  const [event, setEvent] = useState<Event>(initialEvent);
  const { items, addItem } = useCart();
  const { toast } = useToast();
  const [isInCart, setIsInCart] = useState(false);
  
  // Check if the event is already in the cart
  useEffect(() => {
    const eventInCart = items.some(item => item.id === eventId);
    setIsInCart(eventInCart);
  }, [items, eventId]);

  const handleAddToCart = () => {
    addItem(
      {
        id: event.id,
        title: event.title,
        price: event.price,
        image: event.image,
      },
      1 // Default quantity
    );
    
    // Show confirmation toast
    toast({
      title: "Added to cart",
      description: `${event.title} has been added to your cart.`,
      variant: "success",
    });
  };

  const handleViewCart = () => {
    router.push('/checkout');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card>
        <div className="h-[400px] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-3xl">{event.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Date & Time</h3>
            <p className="text-muted-foreground">{event.date}</p>
          </div>
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-muted-foreground">{event.location}</p>
          </div>
          <div>
            <h3 className="font-semibold">Description</h3>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
          <div>
            <h3 className="font-semibold">Price</h3>
            <p className="text-2xl font-bold">R{event.price}</p>
          </div>
        </CardContent>
        <CardFooter>
          {isInCart ? (
            <Button 
              onClick={handleViewCart} 
              size="lg" 
              className="w-full"
              variant="outline"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              View Cart
            </Button>
          ) : (
            <Button 
              onClick={handleAddToCart} 
              size="lg" 
              className="w-full"
              disabled={isInCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
