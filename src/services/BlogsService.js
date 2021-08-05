import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { convertToQuery } from '../utils/Query'

class BlogsService {
  async getAll(query = {}) {
    const res = await api.get('api/blogs' + convertToQuery(query))
    logger.log(res.data)
    AppState.blogs = res.data
  }

  async createBlog(blog) {
    logger.log(blog)
    const res = await api.post('api/blogs', blog)
    await this.getAll()
  }

  async destroy(id) {
    await api.delete('api/blogs/' + id)
    AppState.blogs = AppState.blogs.filter(b => b.id !== id)
  }
}
export const blogsService = new BlogsService()
