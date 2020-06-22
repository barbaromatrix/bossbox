import { Document } from 'mongoose'

export interface IRecord extends Document {}

export interface IRepository<T extends IRecord> {
  find(query?: Partial<T>): Promise<T[]>
  create(item: Omit<T, 'id'|'_id'>): Promise<T>
  update(id: string, item: Partial<Omit<T, 'id'|'_id'>>): Promise<T>
  delete(id: string): Promise<boolean>
}
