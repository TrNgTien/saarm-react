import { Color, Styles } from '@/theme';
import clsx from 'clsx';
import Loader from 'react-spinners/MoonLoader';

interface ICommonLoadingProps {
  color?: string;
}

export const Loading = (props: ICommonLoadingProps) => {
  const { color = Color.PRIMARY } = props;
  return (
    <div
      className={clsx(
        Styles.FLEX_COL_CENTER,
        'justify-center z-50 bg-black-100 opacity-70 fixed inset-0',
      )}>
      <Loader size={80} color={color} />
    </div>
  );
};
