export class RestEndpoints {
  static readonly SIGN_IN = 'auth/sign-in';
  static readonly SIGN_UP = 'auth/sign-up';
  static readonly LOGIN_GOOGLE = 'auth/google';
}

export class LimitRecords {
  static readonly LIMIT_100 = 100;
  static readonly LIMIT_500 = 500;
  static readonly LIMIT_1000 = 1_000;
  static readonly LIMIT_5000 = 5_000;
}

export class Statuses {
  static readonly UNKNOWN = '000_UNKNOWN';
  static readonly ACTIVATED = '100_ACTIVATED';
  static readonly DEACTIVATED = '101_DEACTIVATED';
  static readonly BLOCKED = '102_BLOCKED';
  static readonly DRAFT = '103_DRAFT';
  static readonly ARCHIVE = '104_ARCHIVE';
  static readonly SUCCESS = '105_SUCCESS';
  static readonly FAIL = '106_FAIL';
  static readonly SENT = '107_SENT';
}

export class RoutePath {
  static readonly WELCOME = '/';
  static readonly LOGIN = '/login';
  static readonly REGISTER = '/register';
  static readonly HOME = '/home';
  static readonly WATER_METER = '/water-meter';
  static readonly MESSAGE = '/message';
  static readonly NOTIFICATION = '/notification';
  static readonly BILLING = '/billing';
  static readonly SETTING = '/setting';
  static readonly UTIL = '/util';
}

export const MONTHS: string[] = ['Thang 1', 'Thang 2', 'Thang 3', 'Thang 4'];
