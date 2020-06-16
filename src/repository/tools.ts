import { Schema, model, Document, Model } from 'mongoose'
import { Tool } from './interfaces'

export interface ToolModel extends Document, Tool {}

const toolSchema = new Schema({
  id: Number,
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

const toolsModel: Model<ToolModel> =  model<ToolModel>('Tool', toolSchema)
export default toolsModel