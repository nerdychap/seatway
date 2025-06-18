"use client";
import TicketTypesForm from "@/app/events/create-event/ticket-type-form";
import { ActionState, createEventAction } from "@/lib/actions/events";
import { Ticket } from "@/lib/db/dbSchema";
import { useActionState, useState } from "react";

const initialState: ActionState = {
  errors: {},
  state: {
    description: "",
    event_date: "",
    venue: "",
    event_image_url: "",
    event_name: "",
  },
};

export default function CreateEventPage() {
  const [tickets, setTickets] = useState<Omit<Ticket, "event_id">[]>([]);
  const [state, action, pending] = useActionState(
    createEventAction.bind(null, tickets),
    initialState
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Create New Event
          </h1>

          <form action={action} className="space-y-6">
            <div>
              <label
                htmlFor="event_name"
                className="block text-sm font-medium text-gray-700"
              >
                Event Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="event_name"
                id="event_name"
                defaultValue={state.state?.event_name}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />

              <p className="mt-1 text-sm text-red-600">
                {state.errors?.event_name && state.errors.event_name}
              </p>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                defaultValue={state.state?.description}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />

              <p className="mt-1 text-sm text-red-600">
                {state.errors?.description && state.errors.description}
              </p>
            </div>

            <div>
              <label
                htmlFor="event_date"
                className="block text-sm font-medium text-gray-700"
              >
                Event Date & Time <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                name="event_date"
                id="event_date"
                defaultValue={state.state?.event_date}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />

              <p className="mt-1 text-sm text-red-600">
                {state.errors?.event_date && state.errors.event_date}
              </p>
            </div>

            <div>
              <label
                htmlFor="venue"
                className="block text-sm font-medium text-gray-700"
              >
                Venue<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="venue"
                id="venue"
                defaultValue={state.state?.venue}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />

              <p className="mt-1 text-sm text-red-600">
                {state.errors?.venue && state.errors.venue}
              </p>
            </div>

            <div>
              <label
                htmlFor="event_image_file"
                className="block text-sm font-medium text-gray-700"
              >
                Event Image<span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="event_image_file"
                id="event_image_file"
                accept="image/*"
                className="mt-1 block w-full text-sm text-gray-500
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-md file:border-0
                           file:text-sm file:font-semibold
                           file:bg-indigo-50 file:text-indigo-700
                           hover:file:bg-indigo-100"
              />

              <p className="mt-1 text-sm text-red-600">
                {state.errors?.event_image_url && state.errors.event_image_url}
              </p>
            </div>
            <TicketTypesForm onSetTickets={setTickets} tickets={tickets} />
            <p className="mt-1 text-sm text-red-600">
              {state.errors?.tickets && state.errors.tickets}
            </p>
            <div>
              <button
                type="submit"
                disabled={pending}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  pending
                    ? "bg-indigo-300 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}
              >
                {pending ? "Loading..." : "Create Event"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
