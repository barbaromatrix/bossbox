import { sign, decode } from 'jsonwebtoken'
import config from '../../../config'

export default async (refreshToken: string) => {
  try {
    const [token] = refreshToken.split(' ').reverse()
    const decodedRefreshToken = decode(token, {
      json: true
    })

    const authToken = sign({ user: decodedRefreshToken.user }, config.security.jwtSecret, {
      expiresIn: config.security.jwtAccessTokenExpirationTime,
      issuer: 'vuttr-issuer'
    })

    return { authToken, refreshToken }
  } catch (error) {
    throw error
  }
}
