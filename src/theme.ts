export class Color {
  static readonly PRIMARY = '#00920F';
  static readonly PRIMARY_200 = '#B6FF92';

  // black
  static readonly BLACK = '#0A150F';
  static readonly BLACK_500 = '#999798';
  static readonly BLACK_900 = '#0A150F';

  //white
  static readonly MAIN_WHITE = '#FDFFFE';
}

export class Styles {
  static readonly FLEX_ALIGN_CENTER = 'flex items-center';
  static readonly FLEX_CENTER = 'flex items-center justify-center';
  static readonly FLEX_BETWEEN = 'flex items-center justify-between';
  static readonly FLEX_AROUND = 'flex items-center justify-around';
  static readonly FIXED_FLEX = `fixed ${this.FLEX_BETWEEN} top-0`;
  static readonly STICKY_FLEX = `sticky ${this.FLEX_BETWEEN} top-0`;
  static readonly FLEX_COL = 'flex flex-col';
  static readonly FLEX_COL_CENTER = `${this.FLEX_COL} items-center`;

  static readonly Z_INDEX = {
    100: 'z-100',
    200: 'z-200',
    999: 'z-999',
  };
}
