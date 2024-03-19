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

enum LoggerDateFormat {
  TIME = "HH:mm",
  DATE = "YYYY-MM-DD",
  DAY_MONTH_YEAR = "D MMM YYYY",
  DATETIME = "YYYY-MM-DDTHH:mm",
  DATETIME_WITH_SECONDS = "YYYY-MM-DDTHH:mm:ss",
  ISO8601_WITH_MILLISECONDS = "YYYY-MM-DDTHH:mm:ss.SSS[Z]",
}

const getIsoDateTime = (): string => {
  // the issue with Date.prototype.toISOString() is that it TRANSFORMS time to UTC
  // which causes some validations to fail: e.g. you cannot document an activity before planned dateTime
  return dayjs().format(LoggerDateFormat.ISO8601_WITH_MILLISECONDS);
};

const getNowTime = (
  format: LoggerDateFormat = LoggerDateFormat.TIME
): string => {
  return dayjs().format(format);
};

const getTodayDate = (
  format: LoggerDateFormat = LoggerDateFormat.DATE
): string => {
  return dayjs().format(format);
};

const getDateFormatted = (
  date: string | Date | LoggerDateType = new Date(),
  format: LoggerDateFormat = LoggerDateFormat.DATE
): string => {
  return dayjs(date).isValid() ? dayjs(date).format(format) : "";
};

const getLocalDateTime = (
  date: string | Date | LoggerDateFormat = new Date(),
  format: LoggerDateFormat = LoggerDateFormat.DATETIME
): string => {
  return dayjs(date).isValid() ? dayjs.utc(date).local().format(format) : "";
};

export {
  getDateFormatted,
  getIsoDateTime,
  getLocalDateTime,
  getNowTime,
  getTodayDate,
  dayjs,
};
