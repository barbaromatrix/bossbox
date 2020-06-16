import * as businessRules from '../../../src/business'
import { IRepository } from 'repository/interfaces'
import { Tool } from 'business/interfaces'

describe('Get Tools business use case', () => {
  const fakeRepositoryModel: IRepository<Tool> = {
    find: jest.fn().mockResolvedValue([]),
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn()
  }

  test('Should return an array when no resources get back from repository', async () => {
    const tools = await businessRules.getTools(fakeRepositoryModel)

    expect(fakeRepositoryModel.find).toHaveBeenCalled()
    expect(tools).toBeInstanceOf(Array)
    expect(tools).toHaveLength(0)
  })
})