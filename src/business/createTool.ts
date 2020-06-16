import { ICreateTool } from './interfaces'
import { IRepository } from 'repository/interfaces'
import { Tool } from './interfaces'

export default async ({ tool }: ICreateTool, repo: IRepository<Tool>) => {
  try {
    return repo.create(tool)
  } catch (error) {
    throw error
  }
}
