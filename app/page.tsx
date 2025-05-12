'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SearchBar } from '@/components/search-bar';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/cart-context';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, CheckCircle, Calendar, MapPin, Tag } from 'lucide-react';

const FEATURED_EVENTS = [
  {
    id: 'spring-show-2024',
    title: 'Broadway Musical Extravaganza',
    date: 'May 1, 2024',
    location: 'Broadway Theater, NY',
    price: 200,
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80',
    featured: true,
    category: 'Entertainment',
  },
  {
    id: 'fall-festival-2024',
    title: 'International Food Festival',
    date: 'May 10, 2024',
    location: 'Downtown Plaza, Miami',
    price: 250,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80',
    featured: true,
    category: 'Food & Drink',
  },
];

const REGULAR_EVENTS = [
  {
    id: 'summer-fest-2024',
    title: 'Summer Music Festival 2024',
    date: 'June 15, 2024',
    location: 'Central Park, NY',
    price: 150,
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80',
    category: 'Music',
  },
  {
    id: 'winter-concert-2024',
    title: 'Tech Conference 2024',
    date: 'July 20, 2024',
    location: 'Convention Center, SF',
    price: 300,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    category: 'Technology',
  },
  {
    id: 'comedy-night-2024',
    title: 'Comedy Night Special',
    date: 'August 5, 2024',
    location: 'Laugh Factory, LA',
    price: 300,
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80',
    category: 'Comedy',
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const { items, addItem } = useCart();
  const { toast } = useToast();

  const filteredFeaturedEvents = FEATURED_EVENTS.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredRegularEvents = REGULAR_EVENTS.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Extract EventCard to a separate component to ensure each instance has its own state
  const EventCard = ({ event, cardType }: { event: any; cardType: string }) => {
    const [isInCart, setIsInCart] = useState(false);
    
    // Check if the event is already in the cart
    useEffect(() => {
      // Use the specific event ID to check if it's in the cart
      const eventInCart = items.some(item => item.id === event.id);
      setIsInCart(eventInCart);
    }, [items, event.id]);
    
    const handleAddToCart = (e: React.MouseEvent) => {
      e.preventDefault(); // Prevent navigation
      
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
    
    const handleViewCart = (e: React.MouseEvent) => {
      e.preventDefault(); // Prevent navigation
      window.location.href = '/checkout';
    };
    
    const cardClasses = cardType === 'featured' 
      ? 'overflow-hidden hover-lift transition-all duration-300'
      : 'overflow-hidden hover-scale transition-all duration-300';
    
    return (
      <Card className={cardClasses}>
        <div className="relative h-48 overflow-hidden group">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2">
            <Badge className="bg-accent text-white font-semibold">
              {event.category}
            </Badge>
          </div>
          {event.featured && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
              <Badge variant="secondary" className="animate-pulse-subtle">Featured</Badge>
            </div>
          )}
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-xl">{event.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-lg font-bold mt-1 text-primary">
              <Tag className="mr-2 h-5 w-5" />
              <span>R{event.price}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex gap-2">
          <Link href={`/events/${event.id}`} className="flex-1">
            <Button className="w-full" variant="outline">View Details</Button>
          </Link>
          
          {isInCart ? (
            <Button 
              onClick={handleViewCart} 
              className="flex-1"
              variant="secondary"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              View Cart
            </Button>
          ) : (
            <Button 
              onClick={handleAddToCart} 
              className="flex-1"
              variant="default"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12 text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Discover Amazing Events
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find and book tickets for the most exciting entertainment experiences in your area
        </p>
        <div className="max-w-xl mx-auto">
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      {filteredFeaturedEvents.length > 0 && (
        <section className="mb-12 animate-slide-up">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Events</h2>
            <div className="ml-3 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFeaturedEvents.map((event, index) => (
              <div key={`featured-${event.id}`} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <EventCard 
                  event={event} 
                  cardType="featured"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold">All Events</h2>
          <div className="ml-3 h-1 w-24 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRegularEvents.map((event, index) => (
            <div key={`regular-${event.id}`} className="animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <EventCard 
                event={event} 
                cardType="regular"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}