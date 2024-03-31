import { BaseTzEntity } from '@/base';
import { Statuses } from '@/constants';
import { Column, Entity } from 'typeorm';

@Entity('Role')
export class Role extends BaseTzEntity {
  @Column()
  name: string;

  @Column({ default: Statuses.ACTIVATED })
  status: string;

  @Column({ default: Statuses.ACTIVATED })
  action: string;
}
