"use server";

import { redirect } from "next/navigation";
import { z } from "zod/v4";
import { Event, EventSchema } from "../db/dbSchema";
import { createEvent } from "../db/services/events";
import { uploadFile } from "../db/services/file-upload";

export type ActionState = {
  errors: Partial<Event>;
  state: Omit<Event, "event_id" | "tickets_sold" | "tickets_available">;
};

export const createEventAction = async (
  _prevState: ActionState,
  formData: FormData
) => {
  const event_name = formData.get("event_name") as string;
  const description = formData.get("description") as string;
  const event_date = formData.get("event_date") as string;
  const venue = formData.get("venue") as string;
  const event_image_file = formData.get("event_image_file") as File;
  let event_image_url = "";
  if (event_image_file.size) {
    event_image_url = await uploadFile(event_image_file);
  }

  const isValidated = EventSchema.safeParse({
    event_date,
    event_name,
    event_image_url,
    description,
    venue,
  });

  if (!isValidated.success) {
    const flattedError = z.flattenError(isValidated.error).fieldErrors;
    return {
      errors: {
        event_date: flattedError.event_date?.[0],
        event_name: flattedError.event_name?.[0],
        event_image_url: flattedError.event_image_url?.[0],
        description: flattedError.description?.[0],
        venue: flattedError.venue?.[0],
      },
      state: {
        event_date,
        event_name,
        event_image_url,
        description,
        venue,
      },
    };
  }
  await createEvent({
    event_date,
    event_image_url,
    event_name,
    description,
    venue,
  });
  redirect("/");
};
