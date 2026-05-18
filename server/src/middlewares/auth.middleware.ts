import { createError } from '@/utils/createError.js'
import type { NextFunction, Request, Response } from 'express'
import { jwtVerify } from 'jose'
import { TextEncoder } from 'util'

export const authenticateToken = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization']

  if (!authHeader || !authHeader.startsWith('Bearer '))
    throw createError('UNAUTHORIZED', 'Invalid authorization header')

  const token = authHeader.split(' ')[1]

  if (!token) throw createError('UNAUTHORIZED', 'No authorization header')

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    req.user = payload
    next()
  } catch (error) {
    throw createError('UNAUTHORIZED', 'Invalid or expired token')
  }
}
