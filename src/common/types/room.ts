import { IBase } from './common';

export interface IRoom extends IBase {
  roomName: string;
  roomStatus: string;
  roomPrice: string;
  apartmentName: string;
  apartmentAddress: string;
}

export interface IRoomBill extends IBase {
  id: string;
  waterConsume: string;
  electricityConsume: string;
  extraFee: string;
  roomPrice: string;
  waterMoney: number;
  electricityMoney: number;
  totalMoney: number;
}
