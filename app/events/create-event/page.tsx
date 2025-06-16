import { Submit } from "@/components/ui/submit";
import { createEvent } from "@/lib/db/services/events";
import { uploadFile } from "@/lib/db/services/file-upload";
import { redirect } from "next/navigation";
import React from "react";

export default async function CreateEventPage() {
  const handleCreateEvent = async (formData: FormData) => {
    "use server";

    const eventName = formData.get("event_name") as string;
    const description = formData.get("description") as string;
    const eventDate = formData.get("event_date") as string;
    const venue = formData.get("venue") as string;
    const eventImageFile = formData.get("event_image_file") as File;
    const imageUrl = await uploadFile(eventImageFile);

    await createEvent({
      event_date: new Date(eventDate),
      event_image_url: imageUrl,
      event_name: eventName,
      description,
      venue,
    });
    redirect("/");
  };

  const createTickets = (formData: FormData) => {
    const ticketTypes = [];
    const ticketTypesCount = parseInt(
      (formData.get("ticket_types_count") as string) || "0",
      10
    );

    for (let i = 0; i < ticketTypesCount; i++) {
      const typeName = formData.get(`ticket_type_${i}`) as string;
      const price = parseFloat(formData.get(`price_${i}`) as string);
      const quantity = parseInt(
        formData.get(`quantity_available_${i}`) as string,
        10
      );

      ticketTypes.push({
        name: typeName,
        price: price,
        quantity: quantity,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Create New Event
          </h1>

          <form action={handleCreateEvent} className="space-y-6">
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
                required
                defaultValue=""
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {/* Error display logic removed */}
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                defaultValue=""
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {/* Error display logic removed */}
            </div>

            {/* Event Date & Time */}
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
                required
                defaultValue=""
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {/* Error display logic removed */}
            </div>

            {/* Venue */}
            <div>
              <label
                htmlFor="venue"
                className="block text-sm font-medium text-gray-700"
              >
                Venue
              </label>
              <input
                type="text"
                name="venue"
                id="venue"
                required
                defaultValue=""
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {/* Error display logic removed */}
            </div>

            {/* Event Image File */}
            <div>
              <label
                htmlFor="event_image_file"
                className="block text-sm font-medium text-gray-700"
              >
                Event Image
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
                required
              />
              {/* Error display logic removed */}
              {/* Selected file name display logic removed */}
            </div>

            {/* Static Ticket Types Section */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Ticket Types
              </h2>
              {/* Hidden input for ticket count - static for this example */}
              <input type="hidden" name="ticket_types_count" value="1" />

              {/* Example of one static ticket type */}
              <div className="p-4 border border-gray-200 rounded-md space-y-4 relative">
                {/* Remove button (static, non-functional) */}
                <button
                  type="button"
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
                  aria-label="Remove ticket type"
                  style={{ display: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div>
                  <label
                    htmlFor="ticket_type_0"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ticket Type Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="ticket_type_0"
                    id="ticket_type_0"
                    defaultValue="General Admission"
                    //required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {/* Error display logic removed */}
                </div>
                <div>
                  <label
                    htmlFor="price_0"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price ($) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="price_0"
                    id="price_0"
                    defaultValue="0"
                    required
                    min="0"
                    step="0.01"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {/* Error display logic removed */}
                </div>
                <div>
                  <label
                    htmlFor="quantity_available_0"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Quantity Available <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="quantity_available_0"
                    id="quantity_available_0"
                    defaultValue="0"
                    required
                    min="0"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {/* Error display logic removed */}
                </div>
              </div>

              {/* "Add Another Ticket Type" button (static, non-functional) */}
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-2 border border-dashed border-gray-300 rounded-md shadow-sm text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
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
                Add Another Ticket Type
              </button>
            </div>

            {/* Submission message display logic removed */}

            {/* Submit Button (static) */}
            <div>
              <Submit title="Create Event" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
