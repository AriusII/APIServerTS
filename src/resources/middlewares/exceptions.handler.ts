import { NextFunction, Request, Response } from 'express'

/**
 * Middleware of global error management
 *
 * @param err - Express error (can be ours or another)
 * @param req - The initial request
 * @param res - The response object
 * @param next - Allows to pass to the next middleware if existing
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 */
export const ExceptionsHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  /**
   * See "The default error handler" in the official documentation
   */
  if (res.headersSent) {
    return next(err)
  }

  /**
   * If it's the case, we know it's our error
   */
  if (err.status && err.error) {
    return res.status(err.status).json({ error: err.error })
  }

  /**
   * In other case, we return a error 500
   */
  return res.status(500).json({ error: 'Intern Error' })
}