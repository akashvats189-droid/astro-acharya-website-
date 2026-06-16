import { pgTable, text, serial, timestamp, integer, boolean, uuid, decimal } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users table (handled by Better Auth)
export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow(),
  role: text('role').default('user'), // 'user' or 'admin'
});

// Service Categories
export const categories = pgTable('categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Services
export const services = pgTable('services', {
  id: uuid('id').primaryKey().defaultRandom(),
  categoryId: uuid('category_id').references(() => categories.id),
  name: text('name').notNull(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  duration: integer('duration').notNull(), // in minutes
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Bookings
export const bookings = pgTable('bookings', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  serviceId: uuid('service_id').references(() => services.id).notNull(),
  bookingDate: timestamp('booking_date').notNull(),
  status: text('status').default('pending'), // pending, confirmed, completed, cancelled
  totalPrice: decimal('total_price', { precision: 10, scale: 2 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  bookings: many(bookings),
}));

export const servicesRelations = relations(services, ({ one, many }) => ({
  category: one(categories, {
    fields: [services.categoryId],
    references: [categories.id],
  }),
  bookings: many(bookings),
}));

export const bookingsRelations = relations(bookings, ({ one }) => ({
  user: one(users, {
    fields: [bookings.userId],
    references: [users.id],
  }),
  service: one(services, {
    fields: [bookings.serviceId],
    references: [services.id],
  }),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  services: many(services),
}));
