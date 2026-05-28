export type ApiResponse<T> = {
  status: 'success'
  data: T
}

export type ApiErrorResponse = {
  status: 'error'
  message: string
}
