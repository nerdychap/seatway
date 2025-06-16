"use client";

import { useFormStatus } from "react-dom";

export const Submit = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
        pending
          ? "bg-indigo-400 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }`}
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Loading..." : title}
    </button>
  );
};
