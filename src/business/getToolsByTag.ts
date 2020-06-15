import { IToolsByTag } from './interfaces'

export default ({ tag, model }: IToolsByTag) =>
  model.find({ tags: tag })
