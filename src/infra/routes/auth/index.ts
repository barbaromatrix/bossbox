import { Router, Request, Response } from 'express'
import { requestValidation, checkForValidToken } from '../middlewares/validator'
import { authLoginRequest, authLoginRefresh, authSignUpRequest } from './validator'
import { userSignIn, refreshUserCredentials, userSignUp } from '../../../business'
import { authsModel } from '../../../repository'

const authRouter: Router = Router()

authRouter
  .post('/auth/login',
    requestValidation({ schema: authLoginRequest, requestType: 'body' }),
    async (req: Request, res: Response) => {
      try {
        const authorizationData = await userSignIn(req.body, authsModel)
        return res.status(200).json(authorizationData)
      } catch (error) {
        console.log(error)
        return res.sendStatus(500)
      }
    })
  .post('/auth/login/refresh',
    checkForValidToken(),
    requestValidation({ schema: authLoginRefresh, requestType: 'headers' }),
    async (req: Request, res: Response) => {
      const { authorization } = req.headers
      const authorizationData = await refreshUserCredentials(authorization)

      return res.status(200).json(authorizationData)
    })
  .post('/auth/signup',
    requestValidation({ schema: authSignUpRequest, requestType: 'body' }),
    async (req: Request, res: Response) => {
      try {
        const user = await userSignUp(req.body, authsModel)
        return res.status(201).json(user)
      } catch (error) {
        const message = error.toString() || 'Internal Server Error'
        return res.status(500).json({ message, created: false })
      }
    })

export default authRouter