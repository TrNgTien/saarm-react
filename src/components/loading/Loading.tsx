import { Color, Styles } from '@/theme';
import clsx from 'clsx';
import HashLoader from 'react-spinners/HashLoader';

interface ICommonLoadingProps {
  color?: string;
}

export const Loading = (props: ICommonLoadingProps) => {
  const { color = Color.PRIMARY } = props;
  return (
    <div
      className={clsx(
        Styles.FLEX_COL_CENTER,
        'justify-center z-50 bg-black-100 opacity-75 fixed inset-0',
      )}>
      <HashLoader size={100} color={color} />
    </div>
  );
};
