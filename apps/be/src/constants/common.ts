export class Statuses {
  static readonly ACTIVATED = '100_ACTIVATED';
  static readonly DEACTIVATED = '101_DEACTIVATED';
  static readonly BLOCKED = '102_BLOCKED';
  static readonly ARCHIVE = '103_ARCHIVE';
  static readonly SENT = '104_SENT';

  static readonly DRAFT = '200_DRAFT';
  static readonly PUBLISHED = '201_PUBLISHED';
  static readonly EXPIRED = '202_EXPIRED';
  static readonly SOLD_OUT = '203_SOLD_OUT';

  static readonly PENDING = '300_PENDING';
  static readonly SENDING = '301_SENDING';
  static readonly COMPLETED = '302_COMPLETED';
  static readonly CANCELLED = '303_CANCELLED';
  static readonly FAIL = '304_FAIL';
  static readonly TIMEOUT = ' 305_TIMEOUT';

  static readonly UNKNOWN = '400_UNKNOWN';
  static readonly SUCCESS = '401_SUCCESS';
  static readonly VISITED = '700_VISITED';
  static readonly ARCHIVED = '800_ARCHIVED';

  static readonly SAMPLES = '500_SAMPLES';
  static readonly ON_SALE = '501_ON_SALE';
  static readonly OUT_OF_STOCK = '502_OUT_OF_STOCK';
  static readonly DISCONTINUED = '503_DISCONTINUED';
}

export class StatusesAvaible {
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

export class LimitRecords {
  static readonly LIMIT_100 = 100;
  static readonly LIMIT_500 = 500;
  static readonly LIMIT_1000 = 1_000;
  static readonly LIMIT_5000 = 5_000;
}
