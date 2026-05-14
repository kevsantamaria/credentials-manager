import type { NextFunction, Request, Response } from 'express'
import { jwtVerify } from 'jose'
import { TextEncoder } from 'util'

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization']

  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.status(401).json({ message: 'Invalid authorization header' })

  const token = authHeader.split(' ')[1]

  if (!token)
    return res.status(401).json({ message: 'No authorization header' })

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    req.user = payload
    next()
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' })
  }
}
