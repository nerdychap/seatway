import CheckoutForm from './checkout-form';

// This is required for Next.js static export
export function generateStaticParams() {
  return [
    { eventId: 'payment' },
    { eventId: 'summer-fest-2024' },
    { eventId: 'winter-concert-2024' },
    { eventId: 'spring-show-2024' },
    { eventId: 'fall-festival-2024' }
  ];
}

export default function CheckoutPage({ params }: { params: { eventId: string } }) {
  return <CheckoutForm eventId={params.eventId} />;
}