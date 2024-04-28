import { IconWrapper } from '@/components/common';
import { Color, Styles } from '@/theme';
import { IoIosArrowBack as BackIcon } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export const PageHeader = (props: {
  title: string;
  actionIcon?: JSX.Element;
}) => {
  const { title, actionIcon } = props;
  const navigate = useNavigate();

  return (
    <div className={`${Styles.FLEX_BETWEEN} p-4 leading-4 text-black-900 shadow-md bg-white-900`}>
      <IconWrapper
        size={24}
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
          color={Color.MAIN_WHITE}
          onClick={() => {}}>
          {actionIcon}
        </IconWrapper>
      )}
    </div>
  );
};
