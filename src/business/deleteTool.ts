import { IGetToolById } from './interfaces'

export default async ({ id, model }: IGetToolById): Promise<Boolean> => {
  try {
    const tool = await model.findById(id)
    if (!tool) {
      return false
    }

    return await tool.remove()
  } catch (error) {
    throw error
  }
}