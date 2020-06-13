import { createServer } from './infra/server'

const startServer = async () => {
  const server = await createServer()

  server.listen(3000, (error) => {
    if (error) {
      console.error('Something happened during server startup: ', error)
      throw error
    }

    console.info('Server listening on port 3000')
  })
}

startServer()