import { Styles } from '@/theme';
import React from 'react';
import { IoIosArrowForward as RightArrow } from 'react-icons/io';
import { Link } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  title: string;
  navigateTitle?: string;
  path: string;
  isDisable?: boolean;
  hasShowMore?: boolean;
}
export const ShowMore = (props: IProps) => {
  const {
    isDisable = false,
    title,
    children,
    navigateTitle = 'Xem thêm',
    path,
    hasShowMore = false,
  } = props;
  return (
    <React.Fragment>
      <div className={`${Styles.FLEX_BETWEEN}`}>
        <h1 className="xs:text-sm font-semibold">{title}</h1>
        {hasShowMore && (
          <Link className={Styles.FLEX_CENTER} to={isDisable ? '#' : path}>
            <p className="xs:text-sm font-medium">{navigateTitle}</p>
            <RightArrow />
          </Link>
        )}
      </div>
      {children}
    </React.Fragment>
  );
};
