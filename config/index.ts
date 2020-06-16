import { config } from 'dotenv'
import * as Joi from 'joi'
import { URL } from 'url'
import envSchema from './env.schema'
import { IConfig } from './interface'

config()

const envVar = Joi.attempt(process.env, envSchema)

export default <IConfig>{
  application: {
    port: envVar.PORT,
  },
  database: {
    url: new URL(envVar.DATABASE_NAME, envVar.DATABASE_URI).toString(),
  }
}
