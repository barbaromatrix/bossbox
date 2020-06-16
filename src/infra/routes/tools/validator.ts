import * as Joi from 'joi'

export const getToolsRequest = Joi.object({
  tag: Joi.alternatives().try(Joi.string(), Joi.array()).optional()
})

export const createToolsRequest = Joi.object({
  title: Joi.string().required(),
  link: Joi.string().required(),
  description: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).min(1)
})