import { Ticket } from "@/lib/db/dbSchema";
import React from "react";
import { useFormStatus } from "react-dom";

export type TicketTypeError = Partial<{
  ticket_type: string;
  price: string;
  quantity_available: string;
}>;

export default function TicketTypesForm({
  onSetTickets,
  tickets,
}: {
  onSetTickets: React.Dispatch<
    React.SetStateAction<Omit<Ticket, "event_id">[]>
  >;
  tickets: Omit<Ticket, "event_id">[];
}) {
  const { pending } = useFormStatus();

  const [error, setError] = React.useState<boolean>(false);

  const handleChange = (
    index: number,
    field: keyof Omit<Ticket, "event_id">,
    value: string | number
  ) => {
    const updated = [...tickets];
    if (field === "ticket_type") {
      updated[index].ticket_type = value as string;
    } else if (field === "price") {
      updated[index].price = Number(value);
    } else if (field === "quantity_available") {
      updated[index].quantity_available = Number(value);
    }
    onSetTickets(updated);
  };

  const addTicketType = () => {
    if (
      tickets.some((ticket) => ticket.ticket_type === "") ||
      tickets.some((ticket) => ticket.price <= 0) ||
      tickets.some((ticket) => ticket.quantity_available <= 0)
    ) {
      setError(true);
      return;
    }
    setError(false);

    onSetTickets([
      ...tickets,
      {
        ticket_type: "",
        price: 0,
        quantity_available: 0,
      },
    ]);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Ticket Types</h2>
      <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
        {tickets.map((ticket, idx) => (
          <div key={idx} className="mb-4 border-b border-gray-200 pb-4">
            <div className="mb-4">
              <div className="flex justify-end">
                {tickets.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      onSetTickets(tickets.filter((_, index) => index !== idx))
                    }
                    className="text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Remove ticket type"
                    title="Remove ticket type"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <label
                htmlFor={`ticket_type_${idx}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Type<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name={`ticket_type_${idx}`}
                id={`ticket_type_${idx}`}
                placeholder="e.g. General Admission"
                value={ticket.ticket_type}
                onChange={(e) =>
                  handleChange(idx, "ticket_type", e.target.value)
                }
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor={`price_${idx}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price (R) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name={`price_${idx}`}
                id={`price_${idx}`}
                value={ticket.price}
                onChange={(e) => handleChange(idx, "price", e.target.value)}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor={`quantity_available_${idx}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name={`quantity_available_${idx}`}
                id={`quantity_available_${idx}`}
                value={ticket.quantity_available}
                onChange={(e) =>
                  handleChange(idx, "quantity_available", e.target.value)
                }
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        ))}
        {error && (
          <p className="text-red-500 text-sm mb-4">
            Please fill out all fields correctly before adding a new ticket
            type.
          </p>
        )}

        <button
          type="button"
          onClick={addTicketType}
          disabled={pending}
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "Adding..." : "Add Ticket Type"}
        </button>
      </div>
    </div>
  );
}
