import { Tool } from '../repository/interfaces'

export interface ITools {
  // model?: Model<ToolModel>
  model: any
}

export interface ICreateTool extends ITools {
  tool: Tool
}

export interface IGetToolById extends ITools{
  id: string
}

export interface IToolsByTag extends ITools {
  tag: any
}