import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO'
import { User } from '@modules/users/infra/typeorm/entities/User'

export interface IUserRepository {
  listUsers(): Promise<User[]>
  getUserByEmail(email: string): Promise<User>
  getUserById(id: string): Promise<User>
  newUser(user: ICreateUserDTO): Promise<User>
  updateUser(user: ICreateUserDTO): Promise<User>
}
