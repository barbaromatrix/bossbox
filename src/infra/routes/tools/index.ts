import { Router, Request, Response } from 'express'
import { getTools, getToolsByTag, createTool, deleteTool } from '../../../business'
import { requestValidation } from '../middlewares/validator'
import { getToolsRequest, createToolsRequest, deleteToolRequest } from './validator'
import { toolsModel } from '../../../repository'

const toolRouter: Router = Router()

toolRouter
  .get('/tools', requestValidation({ schema: getToolsRequest, requestType: 'query' }), async (req: Request, res: Response) => {
    try {
      const { tag } = req.query
      if (tag) {
        const tools = await getToolsByTag(tag.toString().split(','), toolsModel)
        return res.status(200).json(tools)
      }

      const tools = await getTools(toolsModel)
      return res.status(200).json(tools)
    } catch (error) {
      return res.sendStatus(500)
    }
  })
  .post('/tools', requestValidation({ schema: createToolsRequest, requestType: 'body' }), async (req: Request, res: Response) => {
    try {
      const tool = await createTool({ tool: req.body }, toolsModel)

      return res.status(201).json(tool)
    } catch (error) {
      return res.sendStatus(500)
    }
  })
  .delete('/tools/:id', requestValidation({ schema: deleteToolRequest, requestType: 'params' }), async (req: Request, res: Response) => {
    try {
      const tool = await deleteTool({ id: req.params.id }, toolsModel)

      if (!tool) {
        return res.sendStatus(404)
      }

      return res.sendStatus(204)
    } catch (error) {
      return res.sendStatus(500)
    }
  })

export default toolRouter