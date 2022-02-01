export enum TrackingType {
  REGULAR_WORK= 'REGULAR_WORK',
  PAUSE = 'PAUSE',
  VACATION = 'VACATION'
}

export interface TimeTrackingRecord {
  id?:number;
  date: string;
  fromTime: string;
  toTime:string;
  userId: string;
  type: TrackingType;
}
