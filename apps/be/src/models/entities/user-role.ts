import { BaseTzEntity } from '@/base';
import { Statuses } from '@/constants';
import { Column, Entity } from 'typeorm';

@Entity('UserRole')
export class UserRole extends BaseTzEntity {
  @Column()
  name: string;

  @Column({ default: Statuses.ACTIVATED })
  status: string;
}
