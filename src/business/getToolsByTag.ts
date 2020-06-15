import { IGetToolsByTag } from './interfaces'

export default ({ tag, model }: IGetToolsByTag) =>
  model.find({ tags: tag })
