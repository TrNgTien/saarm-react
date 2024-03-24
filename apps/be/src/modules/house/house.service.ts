import { Injectable } from '@nestjs/common';

@Injectable()
export class HouseService {
  getHouses() {
    return 'house';
  }
}
