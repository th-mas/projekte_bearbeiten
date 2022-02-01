import {DateRepresentation} from "../../data-access/entities/DateRepresentation";

export const getAsTime = (val: string): Date => {
  const now = new Date();
  now.setHours(getHours(val));
  now.setMinutes(getMinutes(val));
  now.setSeconds(0);
  now.setMilliseconds(0);
  return new Date(now.toISOString());
}

export const getHours = (val: string): number => {
  const splitted = val.split(':');
  return Number.parseInt(splitted[0]);
}

export const getMinutes = (val: string): number => {
  const splitted = val.split(':');
  return Number.parseInt(splitted[1]);
}

export const padToString = (val?: number): string => {
  if (val !== undefined) {
    return `${val}`.padStart(2, '0');
  }
  return '';
}

export const toHoursAndMinutes = (val: string | undefined): { hrs: number, min: number } | undefined => {
  if (val) {
    const hhmm: string[] = val.split(":");
    let hrs = Number.parseInt(hhmm[0]);
    let min = Number.parseInt(hhmm[1]);
    return {hrs, min};
  }
  return undefined;
}

export const updateDurationInfo = (fromTime: string, toTime: string): string => {
  let durationStr = '';
  if (fromTime && toTime) {
    const from = getAsTime(fromTime);
    const to = getAsTime(toTime);
    let duration = to.getTime() - from.getTime();
    let minutes = (duration / 1000) / 60;
    let hours = (minutes - (minutes % 60)) / 60;
    const hadPause = hours >= 6
    if (hadPause) {
      minutes = minutes - 30; // Pause
    }
    hours = (minutes - (minutes % 60)) / 60;
    minutes = minutes - (minutes - (minutes % 60));
    durationStr = `${hours} hour(s) and ${minutes} minute(s)${hadPause ? ' [ -30 minutes pause ]' : ''}`;
  }
  return durationStr;
}

export const dateRepToStr = (date: DateRepresentation): string => {
  return `${date.year}-${padToString(date.month)}-${padToString(date.day)}`;
}

export const dateToDateRep = (date: Date): DateRepresentation => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }
}


export const strToDateRep = (strDate: string): DateRepresentation => {
  if (strDate) {
    const parts = strDate.split('-');
    return {
      year: Number.parseInt(parts[0]),
      month: Number.parseInt(parts[1]),
      day: Number.parseInt(parts[2])
    };
  }
  return {};
}

export const getDateString = (): string => {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const isoStr = new Date(now.getTime() - offset * 60000).toISOString();
  return isoStr.substring(0, isoStr.indexOf('T'));
}
