import { prisma } from '../../prisma/connect'

export class FindOnePostByIdService {
  async perform(id: string) {
    const post = await prisma.posts.findFirst({
      where: {
        id
      },
      select: {
        name: true,
        post: true,
        uri: true
      }
    })
    return post
  }
}
