import { IRepository } from '../../repository/interfaces'
import { Tool } from '../interfaces'

type Tags = string[]

export default (tags: Tags, repo: IRepository<Tool>) => {
  return Array.isArray(tags)
    ? repo.find({ tags })
    : repo.find({ tags: [tags] })
}