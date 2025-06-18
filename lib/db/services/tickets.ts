import { Ticket } from "../dbSchema";
import { supabase } from "@/lib/supabase-client";

export const getTicketsByEventId = async (
  eventId: string
): Promise<Ticket[]> => {
  const { data, error } = await supabase
    .from("tickets")
    .select("*")
    .eq("event_id", eventId)
    .order("price", { ascending: true });
  if (error) {
    throw new Error(error?.message);
  }

  return data;
};

export const createTickets = async (
  tickets: Omit<Ticket, "ticket_id" | "event_id" | "quantity_sold">[],
  eventId: string
): Promise<Ticket[]> => {
  const { data, error } = await supabase
    .from("tickets")
    .insert(
      tickets.map((ticket) => ({
        ...ticket,
        event_id: eventId,
      }))
    )
    .select();

  if (error) {
    throw new Error(error?.message);
  }

  return data;
};
