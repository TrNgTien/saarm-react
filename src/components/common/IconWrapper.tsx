import { cloneElement } from 'react';

export const IconWrapper = (props: {
  children: JSX.Element;
  size?: number;
  hasAmount?: boolean;
  strokeWidth?: number;
  [extra: string]: unknown;
}) => {
  const { children, strokeWidth = 1, hasAmount = false, ...rest } = props; // Set default size

  return (
    <div className="relative">
      {hasAmount && (
        <p className="absolute text-white-10 text-xs font-semibold bg-red-500 rounded-full right-[-4px] top-[-6px] px-1.5">
          3
        </p>
      )}
      {cloneElement(children, { ...rest })}
    </div>
  );
};
