import EventDetails from './event-details';

const events = {
  'summer-fest-2024': {
    id: 'summer-fest-2024',
    title: 'Summer Music Festival 2024',
    date: 'June 15, 2024',
    location: 'Central Park, NY',
    description: 'Join us for an unforgettable day of music featuring top artists from around the world.',
    price: 100,
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80',
  },
  'winter-concert-2024': {
    id: 'winter-concert-2024',
    title: 'Winter Concert Series',
    date: 'December 20, 2024',
    location: 'Madison Square Garden, NY',
    description: 'Experience the magic of winter with our special concert series.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
  },
  'spring-show-2024': {
    id: 'spring-show-2024',
    title: 'Spring Music Show',
    date: 'April 10, 2024',
    location: 'Lincoln Center, NY',
    description: 'Welcome spring with an evening of classical and contemporary music.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80',
  },
  'fall-festival-2024': {
    id: 'fall-festival-2024',
    title: 'Fall Music Festival',
    date: 'September 25, 2024',
    location: 'Brooklyn Bridge Park, NY',
    description: 'Celebrate autumn with indie bands and local artists.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80',
  },
};

export function generateStaticParams() {
  return [
    { id: 'summer-fest-2024' },
    { id: 'winter-concert-2024' },
    { id: 'spring-show-2024' },
    { id: 'fall-festival-2024' }
  ];
}

export default function EventPage({ params }: { params: { id: string } }) {
  const event = events[params.id] || events['summer-fest-2024'];
  return <EventDetails eventId={params.id} initialEvent={event} />;
}