"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center bg-background px-4 py-12 text-center">
      <div className="max-w-md">
        <h1 className="text-9xl font-bold tracking-tighter text-primary">404</h1>
        <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Oops, page not found!
        </p>
        <p className="mt-4 text-muted-foreground">
          It seems like the page you are looking for doesn&apos;t exist or has been moved.
          Don&apos;t worry, let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
