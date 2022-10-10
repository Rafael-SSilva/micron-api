import { inject, injectable } from 'tsyringe'

import { User } from '../infra/typeorm/entities/User'
import { AppError } from '@errors/AppError'
import { IUserRepository } from '../repositories/IUserRepository'
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider'

interface IRequest {
  first_name: string
  last_name: string
  email: string
  password: string
}

interface IResponse {
  id: string
  first_name: string
  last_name: string
  email: string
}

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({
    first_name,
    last_name,
    email,
    password,
  }: IRequest): Promise<IResponse> {
    const checkUserExists = await this.usersRepository.getUserByEmail(email)

    if (checkUserExists) {
      throw new AppError('Email address already used.')
    }

    const hashedPassword = await this.hashProvider.generateHash(password)

    const user = await this.usersRepository.newUser({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    })

    const { password: unusedField, ...userWithoutPassword } = user

    return userWithoutPassword
  }
}
