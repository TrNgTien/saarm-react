import { Styles } from '@/theme';
import clsx from 'clsx';
import React from 'react';

interface IButtonProps {
  title: string;
  onClick: any;
  btnStyles: string;
  titleStyles: string;
  children?: React.ReactNode;
}
export const Button = (props: IButtonProps) => {
  const { title, onClick, btnStyles, children, titleStyles } = props;
  return (
    <button
      onClick={onClick}
      className={clsx('shadow-md rounded-md w-full p-2', btnStyles)}>
      <div className={clsx(Styles.FLEX_CENTER)}>
        {children}
        <p className={clsx(titleStyles)}>{title}</p>
      </div>
    </button>
  );
};
