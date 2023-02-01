import { DeletePostByIdService } from '@/services'
import { Request, Response } from 'express'

export class DeletePostByIdController {
  async handle(request: Request, response: Response) {
    try {
      const deletePostByIdService = new DeletePostByIdService()
      await deletePostByIdService.perform(request.params.id)
      response.status(204).send('Post deleted successfully')
    } catch (error: unknown) {
      response.status(500).send(error)
    }
  }
}
