import * as Joi from 'joi'

export default Joi.object({
  PORT: Joi.number().required(),
  DATABASE_URI: Joi.string().required(),
  DATABASE_NAME: Joi.string().required()
}).unknown(true)
  .options({ abortEarly: false })
