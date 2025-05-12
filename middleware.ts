// This file is intentionally empty to disable middleware
// With static export (output: 'export'), middleware cannot be used
// Authentication and redirects are handled client-side in the layout component

export const config = {
  matcher: [], // Empty matcher to prevent middleware from running
};