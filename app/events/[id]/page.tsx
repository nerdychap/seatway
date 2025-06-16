import { getEventById } from "@/lib/db/services/events";
import { getTicketsByEventId } from "@/lib/db/services/tickets";
import { notFound } from "next/navigation";
import { Event, Ticket } from "@/lib/db/dbSchema"; 


type EventDetailsPageProps = {
  params: Promise<{ id: string }>; 
};

const EventDetailsPage = async ({ params }: EventDetailsPageProps) => {
  const { id } = await params; 

  let event: Event | null = null;
  let tickets: Ticket[] = [];

  try {
    event = await getEventById(id);
    if (event) {
      tickets = await getTicketsByEventId(id);
    }
  } catch (error) {
    console.error("Failed to fetch event details:", error);
    
    notFound();
  }

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-xl sm:p-8">
        {/* Event Name */}
        <h1 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {event.event_name}
        </h1>

        {/* Event Description */}
        {event.description && (
          <p className="mb-8 text-base text-gray-600 leading-relaxed sm:text-lg">
            {event.description}
          </p>
        )}

        {/* Event Meta Information (Date & Venue) */}
        <div className="mb-8 border-t border-b border-gray-200 py-6">
          <dl className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Date & Time</dt>
              <dd className="mt-1 text-md font-semibold text-gray-900 sm:text-lg">
                {new Date(event.event_date).toLocaleString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </dd>
            </div>

            {event.venue && (
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Venue</dt>
                <dd className="mt-1 text-md font-semibold text-gray-900 sm:text-lg">
                  {event.venue}
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* Tickets Section */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Available Tickets
          </h2>
          {tickets && tickets.length > 0 ? (
            <ul className="space-y-4">
              {tickets.map((ticket) => (
                <li
                  key={ticket.ticket_id}
                  className="rounded-md border border-gray-200 bg-gray-50 p-4 shadow-sm hover:shadow-md transition-shadow duration-150"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div className="mb-3 sm:mb-0">
                      <h3 className="text-lg font-medium text-gray-800">
                        {ticket.ticket_type || "General Admission"}
                      </h3>
                      <p className="text-xl font-semibold text-indigo-600 mt-1">
                        ${ticket.price.toFixed(2)}
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
                      aria-label={`Add ${
                        ticket.ticket_type || "General Admission"
                      } to cart`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              Ticket information is not available at this moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
