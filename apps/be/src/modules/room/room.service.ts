import { Room } from '@/models/entities';
import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  getRooms(): string[] {
    return ['HIII'];
  }
  getRoomById(opts: { id: number }) {
    const { id } = opts;
    return '';
  }
  updateRoomById(opts: { id: number }) {
    const { id } = opts;
    return `${id}`;
  }

  async create(payload: Omit<Room, 'id'>): Promise<Room> {
    return new Promise((resolve, reject) => {
      this.roomRepository
        .save(payload)
        .then((rs) => {
          resolve(rs);
        })
        .catch((e) => {
          reject(e);
          throw new HttpException(e, HttpStatus.NOT_IMPLEMENTED);
        });
    });
  }
  delete(opts: { id: number }) {
    const { id } = opts;
    return id;
  }
}
