import Link from "next/link";
import { getEvents } from "../lib/db/services/events";

export default async function EventPage() {
  const data = await getEvents();
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((event) => (
          <div
            key={event.event_id}
            className="transform rounded-lg border bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Link href={`/events/${event.event_id}`}>
              <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                <img
                  src={event.event_image_url ?? "/images/placeholder-event.jpg"}
                  alt={event.event_name || "Event image"}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900">
                {event.event_name}
              </h2>
              <p className="mb-4 text-gray-700">{event.description}</p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(event.event_date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Venue:</strong> {event.venue}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
