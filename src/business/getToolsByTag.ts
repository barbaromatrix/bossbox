import { Tool } from '../repository/interfaces'
import { tools } from '../repository'

export default ({ tag }: { tag: any }): Tool[] => {
  return tools.filter((tool: Tool) => tool.tags.lastIndexOf(tag) > -1)
}