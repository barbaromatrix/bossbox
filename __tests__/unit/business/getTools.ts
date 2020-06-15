import * as businessRules from '../../../src/business'

describe('Get Tools business use case', () => {
  const fakeRepositoryModel = {
    find: jest.fn().mockResolvedValue([
      {
        id: 1,
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
    ])
  }

  test('Should return an array', async () => {
    const tools = await businessRules.getTools({ model: fakeRepositoryModel })

    expect(fakeRepositoryModel.find).toHaveBeenCalled()
    expect(tools).toBeInstanceOf(Array)
    expect(tools).not.toHaveLength(0)
  })
})