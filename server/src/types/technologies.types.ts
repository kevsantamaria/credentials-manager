import type { technologies } from '@/db/schema.js'
import type { InferSelectModel } from 'drizzle-orm'

export type Technology = InferSelectModel<typeof technologies>
