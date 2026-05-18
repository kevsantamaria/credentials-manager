import type { NextFunction, Request, Response } from 'express'

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  switch (err.name) {
    case 'VALIDATION_ERROR':
      res.status(400).json({ status: 'error', message: err.message })
      break
    case 'UNAUTHORIZED':
      res.status(401).json({ status: 'error', message: err.message })
      break
    case 'JWTExpired':
    case 'JWTInvalid':
    case 'JWSInvalid':
      res.status(401).json({ status: 'error', message: err.message })
      break
    case 'FORBIDDEN':
      res.status(403).json({ status: 'error', message: err.message })
      break
    case 'NOT_FOUND':
      res.status(404).json({ status: 'error', message: err.message })
      break
    case 'CONFLICT':
      res.status(409).json({ status: 'error', message: err.message })
      break
    case 'INTERNAL_ERROR':
      res.status(500).json({ status: 'error', message: err.message })
      break
    default:
      console.error(err.name)
      console.error(err.message)
      console.error(err.stack)
      res
        .status(500)
        .json({ status: 'error', message: 'Internal server error' })
      break
  }
}
