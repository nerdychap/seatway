# Seatsway

Seatsway is a modern web platform for discovering, creating, and purchasing tickets for entertainment events. Built with Next.js, TypeScript, Tailwind CSS, and Zod, it provides a seamless experience for both event organizers and attendees.

## Features

- 🎟️ Browse upcoming events with beautiful, responsive cards
- 🖼️ Event detail pages with images, descriptions, and ticket types
- 📝 Create new events with dynamic ticket type forms
- 🔒 User authentication and profile management (Clerk)
- 🗃️ Data validation with Zod schemas
- ⚡ Fast, modern UI with Tailwind CSS
- 🟢 Server actions and API routes for event and ticket management

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/)
- [Clerk](https://clerk.dev/) (for authentication)
- [Supabase](https://supabase.com/) or your preferred database

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nerdychap/seatsway.git
   cd seatsway
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.local` and fill in your supabase and Clerk credentials.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

```
app/
  events/
    [id]/page.tsx         # Event details page
    create-event/         # Event creation form
  user-profile/           # User profile page
  page.tsx                # Home (event listing)
components/               # Reusable UI components
lib/
  db/                     # Database schemas and services
  actions/                # Server actions
public/                   # Static assets (images, etc.)
```

## Scripts

- `dev` – Start the development server
- `build` – Build for production
- `start` – Start the production server
- `lint` – Lint the codebase