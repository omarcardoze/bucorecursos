import { RESOURCES } from './data/resources'
import { Resources } from './types'

const api = {
  resources: {
    list: async (): Promise<Resources[]> => {
      return RESOURCES
    },
  },
}

export default api
