import { createServer } from './infra/server'
import { default as config } from '../config'

const startServer = async () => {
  const server = await createServer()

  server.listen(config.application.port, (error) => {
    if (error) {
      console.error('Something happened during server startup: ', error)
      throw error
    }

    console.info(`Server listening on port ${config.application.port}`)
  })
}

startServer()