import { sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'
import config from '../../../config'
import { IRepository } from '../../repository/interfaces'
import { Auth } from '../interfaces'

export default async (user: Auth, repo: IRepository<Auth>) => {
  try {
    const [userInfo] = await repo.find({ username: user.username })

    if (!userInfo) {
      throw new Error('No user found')
    }

    const passwordMatching = await compare(user.password, userInfo.password)
    if (!passwordMatching) {
      throw new Error('Invalid login credentials')
    }

    const authToken = sign({ user: userInfo._id }, config.security.jwtSecret, {
      expiresIn: config.security.jwtAccessTokenExpirationTime,
      issuer: 'vuttr-issuer'
    })

    const refreshToken = sign({ user: userInfo._id }, config.security.jwtSecret, {
      expiresIn: config.security.jwtRefreshTokenExpirationTime,
      issuer: 'vuttr-issuer'
    })

    return { authToken, refreshToken }
  } catch (error) {
    throw error
  }
}
