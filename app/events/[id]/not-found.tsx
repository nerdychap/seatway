"use client";

import Link from "next/link";
import React from "react";

const EventNotFound = () => {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center bg-background px-4 py-12 text-center">
      <div className="max-w-md">
        {/* You can use an icon here if you have an icon library */}
        {/* <Icon name="calendar-x" className="mx-auto mb-4 h-16 w-16 text-destructive" /> */}
        <h1 className="text-6xl font-bold tracking-tighter text-destructive sm:text-7xl">
          Oops!
        </h1>
        <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Event Not Found
        </p>
        <p className="mt-4 text-muted-foreground">
          The event you are looking for doesn&apos;t exist, may have been moved,
          or is no longer available.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Back to All Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventNotFound;
