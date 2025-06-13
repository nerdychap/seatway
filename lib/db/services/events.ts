import { supabase } from "@/lib/supabase-client";
import { Event } from "../dbSchema";

export const getEvents = async (): Promise<Event[]> => {
  const { data, error } = await supabase.from("events").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getEventById = async (eventId: string): Promise<Event> => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("event_id", eventId)
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
