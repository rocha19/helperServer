import { DeletePostByIdController } from '@/controllers'
import { Router } from 'express'

export const deletePostById = Router()
const deletePostByIdController = new DeletePostByIdController()
deletePostById.delete('/', deletePostByIdController.handle)
