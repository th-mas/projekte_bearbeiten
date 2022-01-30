import {DateRepresentation} from "./DateRepresentation";

export enum TrackingType {
  REGULAR_WORK= 'REGULAR_WORK',
  PAUSE = 'PAUSE',
  VACATION = 'VACATION'
}

export interface TimeTrackingRecord {
  id?:number;
  date: DateRepresentation;
  fromTime: string;
  toTime:string;
  userId: string;
  type: TrackingType;
}
