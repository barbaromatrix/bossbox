// import { Model } from 'mongoose'
// import { ToolModel } from '../repository/tools'

export interface IGetTools {
  // model?: Model<ToolModel>
  model: any
}

export interface IGetToolsByTag extends IGetTools {
  tag: any
}