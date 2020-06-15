import { connect } from 'mongoose'

export const connectToDatabase = async () => {
  const databaseConnection = await connect('mongodb://127.0.0.1/bossabox', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  return databaseConnection
}