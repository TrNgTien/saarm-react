import { Style } from '@/theme';
import React from 'react';
import { IoIosArrowForward as RightArrow } from 'react-icons/io';
import { Link } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  title: string;
  navigateTitle?: string;
  path: string;
}
export const ShowMore = (props: IProps) => {
  const { title, children, navigateTitle = 'Xem thêm', path } = props;
  return (
    <React.Fragment>
      <div className={`${Style.FLEX_BETWEEN}`}>
        <h1 className="font-semibold">{title}</h1>
        <Link className={Style.FLEX_CENTER} to={path}>
          <p className="font-medium">{navigateTitle}</p>
          <RightArrow />
        </Link>
      </div>
      {children}
    </React.Fragment>
  );
};
