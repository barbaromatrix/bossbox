import { getToolsByTag } from '../../../src/business'
import { Tool } from 'repository/interfaces'

describe('Get Tools by tag business use case', () => {
  const data: Tool[] = [
    {
      title: "Notion",
      link: "https://notion.so",
      description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
      tags: [
        "organization",
        "planning",
        "collaboration",
        "writing",
        "calendar"
      ]
    }
  ]
  const fakeRepositoryModel = {
    find: jest.fn().mockResolvedValue([])
  }

  test('Should return an array', async () => {
    fakeRepositoryModel.find.mockResolvedValueOnce(data)
    const tools = await getToolsByTag({ tag: 'node', model: fakeRepositoryModel })

    expect(tools).toBeDefined()
    expect(tools).toBeInstanceOf(Array)
    expect(tools).not.toHaveLength(0)
  })

  test('Should return an array even without any results', async () => {
    const tools = await getToolsByTag({ tag: 'java', model: fakeRepositoryModel })

    expect(tools).toBeDefined()
    expect(tools).toBeInstanceOf(Array)
    expect(tools).toHaveLength(0)
  })
})