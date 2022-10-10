import { inject, injectable } from 'tsyringe'

import { User } from '../infra/typeorm/entities/User'
import { IUserRepository } from '../repositories/IUserRepository'

interface IResponse {
  id: string
  first_name: string
  last_name: string
  email: string
}

@injectable()
export class ListUsersService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(): Promise<IResponse[]> {
    const users = await this.userRepository.listUsers()

    return users.map(user => {
      const { password, ...userWithoutPassword } = user

      return userWithoutPassword
    })
  }
}
