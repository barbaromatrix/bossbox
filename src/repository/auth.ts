import { Schema, model, Model, Error } from 'mongoose'
import { IRepository } from './interfaces'
import { Auth } from '../business/interfaces'

const authSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    unique: true
  },
  password: {
    type: Schema.Types.String,
    required: true
  }
})

const authModel: Model<Auth> = model<Auth>('Auth', authSchema, 'auths')

const authRepository: IRepository<Auth> = {
  find(auth) {
    return authModel
      .find({
        username: auth.username
      })
      .exec()
  },
  create(auth) {
    return authModel.create(auth)
  },
  update(id, auth) {
    return authModel
      .update({ _id: id }, auth)
      .exec()
  },
  async delete(id) {
    const { ok } = await authModel.remove({ _id: id }).exec()
    return Boolean(ok)
  }
}

export default authRepository
