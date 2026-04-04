import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Placeholder users table.
 * This will be replaced by better-auth's managed schema in Milestone 2.
 * It exists here solely to verify that migrations run and the DB connection works.
 */
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
