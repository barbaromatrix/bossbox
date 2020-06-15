import { IGetTools } from './interfaces'
import { toolsModel } from '../repository'

export default ({ model }: IGetTools) =>
  model.find()