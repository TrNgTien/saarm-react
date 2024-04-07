import { RoutePath } from '@/common/constants';
import { IconWrapper } from '@/components/common';
import { Color, Style } from '@/theme';
import { FaArrowLeft as BackIcon } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const PageHeader = (props: {
  title: string;
  actionIcon?: JSX.Element;
}) => {
  const { title, actionIcon } = props;
  const navigate = useNavigate();

  return (
    <div
      className={`${Style.STICKY_FLEX} p-4 bg-[#0A150F] leading-4 ${Style.Z_INDEX}`}>
      <IconWrapper
        size={24}
        hasAmount={false}
        color={Color.MAIN_WHITE}
        onClick={() => navigate(-1)}>
        <BackIcon />
      </IconWrapper>
      <p className="text-white-20 text-lg font-extrabold flex-1 text-center">{title}</p>
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
