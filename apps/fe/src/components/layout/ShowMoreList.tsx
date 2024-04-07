import { Style } from '@/theme';
import React from 'react';
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
        <Link className="flex" to={path}>
          <p className="underline underline-offset-1 mr-1">{navigateTitle}</p>
          &gt;
        </Link>
      </div>
      {children}
    </React.Fragment>
  );
};
