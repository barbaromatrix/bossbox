import { IRepository, IRecord } from '../repository/interfaces'

export interface Tool extends IRecord {
  title: string
  link: string
  description: string
  tags: string[]
}

export interface ITools {
  model: IRepository<Tool>
}

export interface ICreateTool {
  tool: Tool
}

export interface IGetToolById{
  id: string
}

export interface IToolsByTag {
  tag: string | string[]
}