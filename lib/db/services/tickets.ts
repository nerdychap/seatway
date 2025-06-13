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
