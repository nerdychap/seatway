import { z } from "zod/v4";

export const UserSchema = z.object({
  user_id: z.number().int().positive().optional(),
  email: z.email("Invalid email address").min(1, "Email is required"),
  first_name: z.string().max(100, "First name too long").optional().nullable(),
  last_name: z.string().max(100, "Last name too long").optional().nullable(),
  created_at: z.string().datetime().optional().nullable(),
});

export const EventSchema = z.object({
  event_id: z.number().int().positive().optional(),
  event_name: z
    .string()
    .min(1, "Event name is required")
    .max(255, "Event name too long"),
  description: z.string().min(1, "Event description is required"),
  event_date: z
    .string("Invalid event date and time")
    .min(1, "Date is required"),
  venue: z
    .string()
    .min(1, "Event venue is required")
    .max(255, "Venue name too long"),
  total_tickets: z
    .number()
    .int()
    .positive("Total tickets must be positive")
    .optional(),
  event_image_url: z.string().min(1, "Event image required"),
  tickets_sold: z
    .number()
    .int()
    .min(0, "Tickets sold cannot be negative")
    .default(0)
    .optional(),
});

export const TicketSchema = z.object({
  ticket_id: z.number().int().positive().optional(),
  event_id: z.number().int().positive("Event ID is required"),
  ticket_type: z
    .string()
    .max(100, "Ticket type too long")
    .default("Standard")
    .optional(),
  price: z.number().positive("Price must be positive"),
  quantity_available: z
    .number()
    .int()
    .min(0, "Quantity available cannot be negative"),
  quantity_sold: z
    .number()
    .int()
    .min(0, "Quantity sold cannot be negative")
    .default(0)
    .optional(),
});

export const OrderSchema = z.object({
  order_id: z.number().int().positive().optional(),
  user_id: z.number().int().positive("User ID is required"),
  order_date: z.date().optional().nullable(),
  total_amount: z.number().positive("Total amount must be positive"),
  status: z
    .enum(["Pending", "Confirmed", "Cancelled", "Refunded"])
    .default("Pending")
    .optional(),
});

export const OrderItemSchema = z.object({
  order_item_id: z.number().int().positive().optional(),
  order_id: z.number().int().positive("Order ID is required"),
  ticket_id: z.number().int().positive("Ticket ID is required"),
  quantity: z.number().int().positive("Quantity must be positive"),
  purchase_price_per_ticket: z
    .number()
    .positive("Purchase price must be positive"),
});

export type User = z.infer<typeof UserSchema>;
export type Event = z.infer<typeof EventSchema>;
export type Ticket = z.infer<typeof TicketSchema>;
export type Order = z.infer<typeof OrderSchema>;
export type OrderItem = z.infer<typeof OrderItemSchema>;
