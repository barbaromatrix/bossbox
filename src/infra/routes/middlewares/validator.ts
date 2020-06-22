import { Request, Response, NextFunction } from 'express'
import { verify, JsonWebTokenError } from 'jsonwebtoken'
import { validate, Schema } from 'joi'
import config from '../../../../config'

interface IRequestValidation {
  schema: Schema,
  requestType: string
}

const isJoiError = error =>
  error && error.isJoi

export const checkForValidToken = (ignoreExpiration: boolean = false) => (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const [bearer, token] = req.headers.authorization.split(/\s/)

    if (bearer.toLowerCase() !== 'bearer') {
      return res.status(401).json({ message: 'Invalid Token' })
    }

    const verifiedToken = verify(token, config.security.jwtSecret, {
      ignoreExpiration,
      issuer: 'vuttr-issuer'
    })

    return next()
  } catch (error) {
    return error instanceof JsonWebTokenError
      ? res.status(401).json({ message: 'Invalid token' })
      : res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const requestValidation = ({ schema, requestType }: IRequestValidation) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = validate(req[requestType], schema, {
      allowUnknown: true
    })

    if (error) {
      const errorDetails = isJoiError(error)
        ? error.details
        : error

      return res.status(400).json(errorDetails)
    }

    req[requestType] = value

    return next()
  }
