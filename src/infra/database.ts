import { connect } from 'mongoose'
import { default as config } from '../../config'

export const connectToDatabase = async () => {
  const databaseConnection = await connect(config.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  return databaseConnection
}