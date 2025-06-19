export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return 'Error: ' + error.message
  if (error && typeof error === 'object' && 'status' in error) return 'Error: ' + error.status
  return 'Error: ' + error
}