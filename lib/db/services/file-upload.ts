import { supabase } from "@/lib/supabase-client";

export const uploadFile = async (file: File): Promise<string> => {
  const filePath = file.name;

  const { error } = await supabase.storage
    .from("event-images")
    .upload(filePath, file, { upsert: true });
  if (error) {
    throw new Error(`Error uploading image:${error.message}`);
  }
  const {
    data: { publicUrl },
  } = supabase.storage.from("event-images").getPublicUrl(filePath);

  return publicUrl;
};
