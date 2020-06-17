import { IRecord } from '../repository/interfaces'

export interface Tool extends IRecord {
  title: string
  link: string
  description: string
  tags: string[]
}

export interface ICreateTool {
  tool: Tool
}

export interface IGetToolById {
  id: string
}

export interface IToolsByTag {
  tag: string | string[]
}