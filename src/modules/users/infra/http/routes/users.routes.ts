import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

export const usersRouter = Router()
const usersController = new UserController()

usersRouter.get('/', ensureAuthenticated, usersController.index)
usersRouter.get('/:id', ensureAuthenticated, usersController.show)
usersRouter.post('/', usersController.create)
usersRouter.put('/', ensureAuthenticated, usersController.update)
