import { IGetToolById } from '../interfaces'
import { IRepository } from '../../repository/interfaces'
import { Tool } from '../interfaces'

export default async ({ id }: IGetToolById, repo: IRepository<Tool>): Promise<Boolean> => {
  try {
    return repo.delete(id)
  } catch (error) {
    throw error
  }
}