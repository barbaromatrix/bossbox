import { config } from 'dotenv'
import * as Joi from 'joi'
import { URL } from 'url'
import envSchema from './env.schema'
import { IConfig } from './interface'

config()

const envVar = Joi.attempt(process.env, envSchema)

const applicationConfig: IConfig = {
  application: {
    port: envVar.PORT,
  },
  database: {
    url: new URL(envVar.DATABASE_NAME, envVar.DATABASE_URI).toString(),
  },
  security: {
    passwordSecret: envVar.ENCODE_SECRET,
    jwtSecret: envVar.JWT_SECRET,
    jwtAccessTokenExpirationTime: envVar.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
    jwtRefreshTokenExpirationTime: envVar.JWT_REFRESH_TOKEN_EXPIRATION_TIME
  }
}

export default applicationConfig
