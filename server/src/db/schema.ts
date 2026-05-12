import {
  boolean,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid().defaultRandom().primaryKey(),
  username: varchar({ length: 50 }).unique().notNull(),
  password: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
})

export const sites = pgTable('sites', {
  id: serial().primaryKey(),
  name: varchar({ length: 100 }).notNull(),
  url: varchar({ length: 255 }),
  type: varchar({ length: 50 }),
  isInternal: boolean().default(true),
  notes: text(),
  credentials: jsonb(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
})
