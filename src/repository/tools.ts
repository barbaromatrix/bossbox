import { Schema, model, Model } from 'mongoose'
import { IRepository } from './interfaces'
import { Tool } from '../business/interfaces'

const toolSchema = new Schema({
  title: {
    type: Schema.Types.String
  },
  link: {
    type: Schema.Types.String
  },
  description: {
    type: Schema.Types.String
  },
  tags: {
    required: true,
    type: [Schema.Types.String]
  }
})

const toolsModel: Model<Tool> = model<Tool>('Tool', toolSchema)

const toolRepository: IRepository<Tool> = {
  find(tool) {
    return tool
      ? toolsModel
        .find({
          tags: {
            '$all': tool.tags
          }
        })
        .exec()
      : toolsModel
        .find()
        .exec()
  },
  create(tool) {
    return toolsModel.create(tool)
  },
  update(id, tool) {
    return toolsModel
      .update({ _id: id }, tool)
      .exec()
  },
  async delete(id) {
    const { ok } = await toolsModel.remove({ _id: id }).exec()
    return Boolean(ok)
  }
}

export default toolRepository
