import { IRepository } from 'repository/interfaces'
import { Tool } from './interfaces'

export default (repo: IRepository<Tool>) =>
  repo.find()