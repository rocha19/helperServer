import { prisma } from '../../prisma/connect'

export class FindAllPostService {
  async perform() {
    const posts = await prisma.posts.findMany()
    return posts
  }
}
