import { Request, Response, NextFunction } from 'express'
import { validate, Schema } from 'joi'

interface IRequestValidation {
  schema: Schema,
  requestType: string
}

const isJoiError = error =>
  error && error.isJoi

export const requestValidation = ({ schema, requestType }: IRequestValidation) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = validate(req[requestType], schema)

    if (error) {
      const errorDetails = isJoiError(error)
        ? error.details
        : error

      return res.status(400).json(errorDetails)
    }

    req[requestType] = value

    return next()
  }
