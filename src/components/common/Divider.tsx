import { Styles } from '@/theme';
import clsx from 'clsx';

const TextSeparator = (props: {
  text?: string;
  lineStyle: string;
  textStyle?: string;
}) => {
  const { text, lineStyle, textStyle } = props;
  return (
    <div className={clsx(Styles.FLEX_CENTER, 'w-full mx-auto')}>
      <div className={clsx(lineStyle, 'w-3/6')} />
      <p className={clsx(textStyle, 'px-2')}>{text}</p>
      <div className={clsx(lineStyle, 'w-3/6')} />
    </div>
  );
};

export const Divider = (props: {
  textSeparate?: boolean;
  textMid?: string;
  lineStyle: string;
  textStyle?: string;
}) => {
  const { textSeparate = false, textMid, lineStyle, textStyle } = props;
  return !textSeparate ? (
    <div className={lineStyle} />
  ) : (
    <TextSeparator text={textMid} lineStyle={lineStyle} textStyle={textStyle} />
  );
};
