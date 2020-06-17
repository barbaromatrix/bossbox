import { Document } from 'mongoose'

export interface IRecord extends Document {}

export interface IRepository<T extends IRecord> {
  find(query?: Partial<T>): Promise<T[]>
  create(tool: Omit<T, 'id'|'_id'>): Promise<T>
  update(id: string, tool: Partial<Omit<T, 'id'|'_id'>>): Promise<T>
  delete(id: string): Promise<boolean>
}
