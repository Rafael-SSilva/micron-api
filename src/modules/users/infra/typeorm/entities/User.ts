import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  first_name: string

  @Column()
  last_name: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
