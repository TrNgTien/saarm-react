import { RoutePath } from '@/common/constants';
import { IconWrapper } from '@/components/common';
import { Color, Style } from '@/theme';
import { IoIosArrowBack as BackIcon } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export const PageHeader = (props: {
  title: string;
  actionIcon?: JSX.Element;
}) => {
  const { title, actionIcon } = props;
  const navigate = useNavigate();

  return (
    <div className={`${Style.STICKY_FLEX} p-4 leading-4 ${Style.Z_INDEX} text-black-900`}>
      <IconWrapper
        size={24}
        hasAmount={false}
        color={Color.BLACK_900}
        onClick={() => navigate(-1)}>
        <BackIcon />
      </IconWrapper>
      <p className="text-lg font-semibold flex-1 text-center">
        {title}
      </p>
      {actionIcon && (
        <IconWrapper
          size={24}
          hasAmount
          color={Color.MAIN_WHITE}
          onClick={() => navigate(RoutePath.NOTIFICATION)}>
          {actionIcon}
        </IconWrapper>
      )}
    </div>
  );
};
