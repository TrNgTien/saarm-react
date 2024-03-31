import { BaseTzEntity } from '@/base';
import { Statuses } from '@/constants';
import { Column, Entity } from 'typeorm';

@Entity('MetaLink')
export class MetaLink extends BaseTzEntity {
  @Column()
  name: string;

  @Column({ default: Statuses.ACTIVATED })
  status: string;
}
