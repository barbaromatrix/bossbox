import * as Joi from 'joi'

export const authLoginRequest = Joi.object({
  username: Joi.string().email().max(100).required(),
  password: Joi.string().min(5).max(100).required()
})

export const authLoginRefresh = Joi.object({
  authorization: Joi.string().required()
})

export const authSignUpRequest = Joi.object({
  username: Joi.string().email().max(100).required(),
  password: Joi.string().min(5).max(100).required()
})
