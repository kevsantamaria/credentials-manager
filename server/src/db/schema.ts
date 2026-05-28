import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core'

type TemplateField = {
  id: string
  label: string
  type: 'text' | 'password' | 'email' | 'url'
}

type TemplateGroup = {
  id: string
  label: string
  fields: TemplateField[]
}

export const users = pgTable('users', {
  id: uuid().defaultRandom().primaryKey(),
  username: varchar({ length: 50 }).unique().notNull(),
  password: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
})

export const refreshTokens = pgTable('refresh_tokens', {
  id: serial().primaryKey(),
  token: text().notNull(),
  userId: uuid()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: timestamp().notNull(),
  createdAt: timestamp().defaultNow(),
})

export const technologies = pgTable('technologies', {
  id: serial().primaryKey(),
  name: varchar({ length: 50 }).unique().notNull(),
})

export const sites = pgTable('sites', {
  id: serial().primaryKey(),
  name: varchar({ length: 100 }).unique().notNull(),
  url: varchar({ length: 255 }),
  isInternal: boolean().default(true),
  notes: text(),
  technologyId: integer()
    .notNull()
    .references(() => technologies.id, { onDelete: 'cascade' }),
  credentials: jsonb().$type<Record<string, string>[]>(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
})

export const templates = pgTable('templates', {
  id: serial().primaryKey(),
  name: varchar({ length: 100 }).notNull(),
  fields: jsonb().$type<TemplateGroup[]>(),
  technologyId: integer()
    .notNull()
    .references(() => technologies.id, { onDelete: 'cascade' }),
})

export const tags = pgTable('tags', {
  id: serial().primaryKey(),
  name: varchar({ length: 50 }).unique().notNull(),
})

export const siteTags = pgTable('site_tags', {
  siteId: integer()
    .notNull()
    .references(() => sites.id, { onDelete: 'cascade' }),
  tagId: integer()
    .notNull()
    .references(() => tags.id, { onDelete: 'cascade' }),
})

export const templateTags = pgTable('template_tags', {
  templateId: integer()
    .notNull()
    .references(() => templates.id, { onDelete: 'cascade' }),

  tagId: integer()
    .notNull()
    .references(() => tags.id, { onDelete: 'cascade' }),
})
