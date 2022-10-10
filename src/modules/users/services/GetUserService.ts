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
export class GetUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(user_id: string): Promise<IResponse> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } =
      await this.userRepository.getUserById(user_id)

    return userWithoutPassword
  }
}
