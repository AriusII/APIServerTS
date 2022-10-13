import { NotFoundException } from '../utils/exceptions.js'

/**
 * For all other undefined routes, we return an error
 */
export const UnknownRoutesHandler = () => {
  throw new NotFoundException(`The requested resource does not exist`)
}