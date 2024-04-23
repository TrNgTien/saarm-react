import dayjs, { Dayjs as LoggerDateType } from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(CustomParseFormat);
dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.extend(timezone);

const tz = "Asia/Ho_Chi_Minh";
dayjs.tz.setDefault(tz);

enum DateFormat {
  TIME = "HH:mm",
  DATE = "YYYY-MM-DD",
  DAY_MONTH_YEAR = "D MMM YYYY",
  DATETIME = "YYYY-MM-DDTHH:mm",
  DATETIME_WITH_SECONDS = "YYYY-MM-DDTHH:mm:ss",
  ISO8601_WITH_MILLISECONDS = "YYYY-MM-DDTHH:mm:ss.SSS[Z]",
}

export const getIsoDateTime = (): string => {
  // the issue with Date.prototype.toISOString() is that it TRANSFORMS time to UTC
  // which causes some validations to fail: e.g. you cannot document an activity before planned dateTime
  return dayjs().format(DateFormat.ISO8601_WITH_MILLISECONDS);
};

export const getNowTime = (
  format: DateFormat = DateFormat.TIME
): string => {
  return dayjs().format(format);
};

export const getTodayDate = (
  format: DateFormat = DateFormat.DATE
): string => {
  return dayjs().format(format);
};

export const getDateFormatted = (
  date: string | Date | LoggerDateType = new Date(),
  format: DateFormat = DateFormat.DATE
): string => {
  return dayjs(date).isValid() ? dayjs(date).format(format) : "";
};

export const getLocalDateTime = (
  date: string | Date | DateFormat = new Date(),
  format: DateFormat = DateFormat.DATETIME
): string => {
  return dayjs(date).isValid() ? dayjs.utc(date).local().format(format) : "";
};

export {
  dayjs,
};
