import { db } from '@/db/db.js'
import { refreshTokens, users } from '@/db/schema.js'
import { createError } from '@/utils/createError.js'
import bcrypt from 'bcryptjs'
import { eq } from 'drizzle-orm'
import type { Request, Response } from 'express'
import { SignJWT } from 'jose'

export const auth = async (req: Request, res: Response) => {
  const { username, password } = req.body

  const [valid] = await db
    .select({ id: users.id, password: users.password })
    .from(users)
    .where(eq(users.username, username))
  if (!valid) throw createError('UNAUTHORIZED', 'Invalid username or password')

  const match = await bcrypt.compare(password, valid.password)
  if (!match) throw createError('UNAUTHORIZED', 'Invalid username or password')

  const expiresIn = process.env.JWT_EXPIRES_IN!
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  const token = await new SignJWT({ sub: valid.id })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt(new Date())
    .setExpirationTime(expiresIn)
    .sign(secret)

  const refreshTokenTime = process.env.REFRESH_TOKEN_TIME!
  const refreshToken = await new SignJWT({ sub: valid.id })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt(new Date())
    .setExpirationTime(refreshTokenTime)
    .sign(secret)

  await db.insert(refreshTokens).values({
    token: refreshToken,
    expiresAt: new Date(Date.now() + parseInt(refreshTokenTime)),
    userId: valid.id,
  })

  return res.json({ token, refreshToken })
}
