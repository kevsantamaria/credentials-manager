export const ERROR_NAMES = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  FORBIDDEN: 'FORBIDDEN',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const

export const createError = (
  name: keyof typeof ERROR_NAMES,
  message: string
) => {
  const error = new Error(message)
  error.name = name
  return error
}
