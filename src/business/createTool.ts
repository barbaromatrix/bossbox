import { ICreateTool } from './interfaces'

export default async ({ model, tool }: ICreateTool) => {
  try {
    const createdTool = new model(tool)
    return createdTool.save()
  } catch (error) {
    throw error
  }
}