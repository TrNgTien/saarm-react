import { IBase } from './common';

export interface IRoom extends IBase {
  roomName: string;
  roomStatus: string;
  roomPrice: string;
  apartmentName: string;
  apartmentAddress: string;
}

export interface IRoomBill {
  roomPrice: string;
  waterMoney: number;
  electricityMoney: number;
  totalMoney: number;
  extraFee: number;
}
