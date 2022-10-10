import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

import { User } from '../infra/typeorm/entities/User'
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider'
import { IUserRepository } from '../repositories/IUserRepository'

interface IRequest {
  user_id: string
  first_name: string
  last_name: string
  email: string
  old_password?: string
  password?: string
}

interface IResponse {
  id: string
  first_name: string
  last_name: string
  email: string
}

@injectable()
export class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({
    user_id,
    first_name,
    last_name,
    email,
    old_password,
    password,
  }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.getUserById(user_id)

    if (!user) {
      throw new AppError('User not found.')
    }

    const userWithUpdatedEmail = await this.userRepository.getUserByEmail(email)

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id) {
      throw new AppError('E-mail already in use.')
    }

    user.first_name = first_name
    user.last_name = last_name
    user.email = email

    if (password && !old_password) {
      throw new AppError(
        'You need to inform the old password to set a new password.',
      )
    }

    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        old_password,
        user.password,
      )

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.')
      }

      user.password = await this.hashProvider.generateHash(password)
    }

    const userUpdated = await this.userRepository.updateUser(user)

    const { password: unusedField, ...userWithoutPassword } = userUpdated

    return userWithoutPassword
  }
}
