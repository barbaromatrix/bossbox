import { Router, Request, Response } from 'express'
import { getTools, getToolsByTag, createTool } from '../../../business'
import { toolsModel } from '../../../repository'

const toolRouter: Router = Router()

toolRouter
  .get('/tools', async (req: Request, res: Response) => {
    try {
      const { tag } = req.query
      if (tag) {
        const tools = await getToolsByTag({ tag, model: toolsModel })
        return res.status(200).json(tools)
      }

      const tools = await getTools({ model: toolsModel })
      return res.status(200).json(tools)
    } catch (error) {
      return res.sendStatus(500)
    }
  })
  .post('/tools', async (req: Request, res: Response) => {
    try {
      const tool = await createTool({ tool: req.body, model: toolsModel })

      return res.status(201).json(tool)
    } catch (error) {
      return res.sendStatus(500)
    }
  })
  .delete('/tools/:id', (req: Request, res: Response) => {
    try {
      return res.sendStatus(501)
    } catch (error) {
      return res.sendStatus(500)
    }
  })

export default toolRouter