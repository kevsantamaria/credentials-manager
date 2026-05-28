import { db } from '@/db/db.js'
import { technologies } from '@/db/schema.js'
import type { ApiResponse } from '@/types/api.types.js'
import type { Technology } from '@/types/technologies.types.js'
import { createError } from '@/utils/createError.js'
import type { CreateTechnology } from '@/validators/technologies.schema.js'
import { eq } from 'drizzle-orm'
import type { Request, Response } from 'express'

export const createTechnology = async (
  req: Request<object, object, CreateTechnology>,
  res: Response<ApiResponse<Technology>>
) => {
  const { name } = req.body

  const [existingTechnology] = await db
    .select()
    .from(technologies)
    .where(eq(technologies.name, name))

  if (existingTechnology) {
    throw createError('CONFLICT', 'Technology already exists')
  }

  const [technology] = await db
    .insert(technologies)
    .values({ name })
    .returning()

  if (!technology) {
    throw createError('INTERNAL_ERROR', 'Technology could not be created')
  }

  return res.status(201).json({ status: 'success', data: technology })
}

export const getAllTechnologies = async (
  _req: Request,
  res: Response<ApiResponse<Technology[]>>
) => {
  const allTechnologies = await db.select().from(technologies)

  return res.json({ status: 'success', data: allTechnologies })
}
