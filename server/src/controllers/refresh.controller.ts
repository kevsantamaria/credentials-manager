import { db } from '@/db/db.js'
import { refreshTokens } from '@/db/schema.js'
import { createError } from '@/utils/createError.js'
import { eq } from 'drizzle-orm'
import type { Request, Response } from 'express'
import { jwtVerify, SignJWT } from 'jose'

export const refresh = async (req: Request, res: Response) => {
  const { refresh } = req.body

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  try {
    await jwtVerify(refresh, secret)
  } catch {
    throw createError('UNAUTHORIZED', 'Invalid refresh token')
  }

  const [token] = await db
    .select()
    .from(refreshTokens)
    .where(eq(refreshTokens.token, refresh))

  if (!token) throw createError('UNAUTHORIZED', 'Invalid refresh token')

  const expiresIn = process.env.JWT_EXPIRES_IN!
  const newAccessToken = await new SignJWT({ sub: token.userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt(new Date())
    .setExpirationTime(expiresIn)
    .sign(secret)

  return res.json({ newAccessToken })
}
