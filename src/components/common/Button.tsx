import { Styles } from '@/theme';
import clsx from 'clsx';
import React from 'react';

interface IButtonProps {
  title: string;
  onClick: any;
  btnStyles: string;
  titleStyles: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button = (props: IButtonProps) => {
  const { title, onClick, btnStyles, children, titleStyles, disabled } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'shadow-md rounded-md w-full p-2',
        btnStyles,
        disabled && 'text-gray-400 bg-gray-200 hover:cursor-not-allowed',
      )}>
      <div className={clsx(Styles.FLEX_CENTER)}>
        {children}
        <p className={clsx(titleStyles)}>{title}</p>
      </div>
    </button>
  );
};
