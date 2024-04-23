import { Color } from '@/theme';
import HashLoader from 'react-spinners/HashLoader';

interface ICommonLoadingProps {
  color?: string;
}

export const CommonLoading = (props: ICommonLoadingProps) => {
  const { color = Color.PRIMARY } = props;
  return (
    <div className="z-50 bg-black-100 opacity-65 fixed top-0 right-0 left-0 bottom-0">
      <div className="relative top-[40%]">
        <HashLoader
          className="absolute left-[38%]"
          size={100}
          color={color}
        />
      </div>
    </div>
  );
};
