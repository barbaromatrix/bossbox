import { ICreateTool } from './interfaces'

export default async ({ model, tool }: ICreateTool) => {
  try {
    const createdTool = new model(tool)
    console.log(createdTool)

    // const createdTool = await model.save(tool)
    return createdTool.save()
  } catch (error) {
    throw error
  }
}