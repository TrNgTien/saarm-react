import { BaseTzEntity } from '@/base';
import { Statuses } from '@/constants';
import { Column, Entity } from 'typeorm';

@Entity('Apartment')
export class Apartment extends BaseTzEntity {
  @Column()
  name: string;

  @Column({ default: Statuses.ACTIVATED })
  status: string;
}
