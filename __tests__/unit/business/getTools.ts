import { getTools } from '../../../src/business'

describe('Get Tools business use case', () => {
  test('Should return an array', async () => {
    const tools = await getTools()

    expect(tools).toBeDefined()
    expect(tools).toBeInstanceOf(Array)
    expect(tools).not.toHaveLength(0)
  })
})