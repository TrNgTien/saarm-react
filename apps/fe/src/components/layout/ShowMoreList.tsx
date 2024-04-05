import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  title: string;
  navigateTitle: string;
  path: string;
}
export const ShowMore = (props: IProps) => {
  const { title, children, navigateTitle, path } = props;
  return (
    <React.Fragment>
      <div className="flex justify-between">
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
