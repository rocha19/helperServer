import { Router } from 'express'
import { createPost } from './create-post'
import { findAllPost } from './find-all-posts'
import { deletePostById } from './find-delete-post-by-id'
import { findOnePostById } from './find-one-post-by-id'

export const routes = Router()

routes.use('/create', createPost)
routes.use('/find', findAllPost)
routes.use('/find/:id', findOnePostById)
routes.use('/delete/:id', deletePostById)

// https://b8ad-200-124-166-224.ngrok.io/api
