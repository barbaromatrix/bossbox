import { getToolsByTag } from '../../../src/business'

describe('Get Tools by tag business use case', () => {
  test('Should return an array', async () => {
    const tools = await getToolsByTag({ tag: 'node' })

    expect(tools).toBeDefined()
    expect(tools).toBeInstanceOf(Array)
    expect(tools).not.toHaveLength(0)
  })

  test('Should return an array even without any results', async () => {
    const tools = await getToolsByTag({ tag: 'java' })

    expect(tools).toBeDefined()
    expect(tools).toBeInstanceOf(Array)
    expect(tools).toHaveLength(0)
  })
})