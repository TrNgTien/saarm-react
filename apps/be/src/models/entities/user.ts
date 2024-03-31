import { BaseTzEntity } from '@/base';
import { Statuses } from '@/constants';
import { Column, Entity } from 'typeorm';

@Entity('User')
export class User extends BaseTzEntity {
  @Column({
    name: 'user_name',
  })
  username: string;

  @Column()
  password: string;

  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column({
    name: 'email',
  })
  email: string;

  @Column({
    name: 'last_login_at',
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastLoginAt: string;

  @Column({ default: Statuses.ACTIVATED })
  status: string;
}
