import { hash } from 'bcrypt'
import { IRepository } from '../../repository/interfaces'
import { Auth } from '../interfaces'

export default async (user: Auth, repo: IRepository<Auth>) => {
  try {
    const hashedUserPassword: string = await hash(user.password, 10)
    const { username } = await repo.create(<Auth>{ username: user.username, password: hashedUserPassword })

    return { username, created: true }
  } catch (error) {
    throw error
  }
}
