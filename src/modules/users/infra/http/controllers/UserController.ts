import { CreateUserService } from '@modules/users/services/CreateUserService'
import { GetUserService } from '@modules/users/services/GetUserService'
import { ListUsersService } from '@modules/users/services/ListUsersService'
import { UpdateUserService } from '@modules/users/services/UpdateUserService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

// Each method of the controller delegates the business logic to their specific service.
export class UserController {
  async index(request: Request, response: Response): Promise<Response> {
    const userService = container.resolve(ListUsersService)

    const result = await userService.execute()

    return response.json(result)
  }

  async create(request: Request, response: Response): Promise<Response> {
    const createUserService = container.resolve(CreateUserService)

    const result = await createUserService.execute(request.body)

    return response.status(201).json(result)
  }

  // only authenticated users can be update
  async update(request: Request, response: Response): Promise<Response> {
    // Get the user id from the middleware and update with the new body data
    const userData = { user_id: request.user.id, ...request.body }

    const updateUserService = container.resolve(UpdateUserService)

    const userUpdated = await updateUserService.execute(userData)

    return response.status(200).json(userUpdated)
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.params

    const getUserService = container.resolve(GetUserService)

    const user = await getUserService.execute(user_id)

    return response.status(200).json(user)
  }
}
