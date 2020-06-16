import { getToolsByTag } from '../../../src/business'
import { Tool } from '../../../src/business/interfaces'
import { IRepository } from '../../../src/repository/interfaces'

describe('Get Tools by tag business use case', () => {
  const fakeRepositoryModel: IRepository<Tool> = {
    find: jest.fn().mockResolvedValue([]),
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn()
  }

  test('Should return an array', async () => {
    const tools = await getToolsByTag(['node'], fakeRepositoryModel)

    expect(tools).toBeDefined()
    expect(tools).toBeInstanceOf(Array)
    expect(tools).toHaveLength(0)
  })
})