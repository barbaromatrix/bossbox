import { Schema, model, Document, Model } from 'mongoose'
import { Tool } from './interfaces'

export interface ToolModel extends Document, Tool {}

const toolSchema = new Schema({
  id: Number,
  title: String,
  link: String,
  description: String,
  tag: [String]
})

const toolsModel: Model<ToolModel> =  model<ToolModel>('Tool', toolSchema)
export default toolsModel