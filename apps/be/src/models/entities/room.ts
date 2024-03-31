import { BaseTzEntity } from '@/base';
import { Column, Entity } from 'typeorm';

@Entity('Room')
export class Room extends BaseTzEntity {
  @Column()
  name: string;

  @Column()
  monthlyPrice: string;
}
