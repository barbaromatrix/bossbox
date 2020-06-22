import * as Joi from 'joi'

export default Joi.object({
  PORT: Joi.number().required(),
  DATABASE_URI: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  ENCODE_SECRET: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.alternatives(Joi.string(), Joi.number()).required(),
  JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.alternatives(Joi.string(), Joi.number()).required()
}).unknown(true)
  .options({ abortEarly: false })
