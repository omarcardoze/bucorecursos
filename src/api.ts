import { PROJECTS } from './data/projects'
import { Project } from './types'

const api = {
  projects: {
    list: async (): Promise<Project[]> => {
      return PROJECTS
    }
  }
}

export default api
