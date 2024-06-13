import { Statuses } from "../constants";

export interface IApartment {
  id: string;
  name: string;
  location: string;
  address: string;
  totalRoom: number;
  roomAvailable: number;
}

export interface INewApartment {
  name: string;
  locationUrl: string;
  address: string;
  totalRoom: number;
  roomAvailable: number;
}

export interface IApartmentRoom {
  id: string;
  roomName: string;
  roomStatus: typeof Statuses;
  roomPrice: string;
  maxPeople: string;
  currentPeople: string;
}
