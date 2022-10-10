import { getRepository, Repository } from 'typeorm'

import { IUserRepository } from '@modules/users/repositories/IUserRepository'
import { User } from '@modules/users/infra/typeorm/entities/User'
import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'

export class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User)
  }

  async listUsers(): Promise<User[]> {
    const users = await this.ormRepository.find()
    return users
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ email })

    return user
  }

  async getUserById(user_id: string): Promise<User> {
    return await this.ormRepository.findOne({ id: user_id })
  }

  async newUser({
    email,
    password,
    first_name,
    last_name,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create({
      email,
      password,
      first_name,
      last_name,
    })
    await this.ormRepository.save(user)

    return user
  }

  async updateUser(user: User): Promise<User> {
    return await this.ormRepository.save(user)
  }
}
