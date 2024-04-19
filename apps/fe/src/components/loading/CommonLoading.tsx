import { Color } from '@/theme';
import HashLoader from 'react-spinners/HashLoader';

interface ICommonLoadingProps {
  color?: string;
}

export const CommonLoading = (props: ICommonLoadingProps) => {
  const { color = Color.PRIMARY } = props;
  return <HashLoader color={color} />;
};
