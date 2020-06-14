import { Router, Request, Response } from 'express'
import { getTools, getToolsByTag } from '../../../business'

const toolRouter: Router = Router()

toolRouter
  .get('/tools', async (req: Request, res: Response) => {
    const { tag } = req.query

    if (tag) {
      const tools = await getToolsByTag({ tag })
      return res.status(200).json(tools)
    }

    const tools = await getTools()
    return res.status(200).json(tools)
  })
  .post('/tools', (req: Request, res: Response) => {
    return res.sendStatus(501)
  })
  .delete('/tools/:id', (req: Request, res: Response) => {
    return res.sendStatus(501)
  })

export default toolRouter