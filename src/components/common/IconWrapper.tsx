import { cloneElement } from 'react';

export const IconWrapper = (props: {
  children: JSX.Element;
  size?: number;
  iconAmount?: number;
  strokeWidth?: number;
  [extra: string]: unknown;
}) => {
  const { children, strokeWidth = 1, iconAmount = 0, ...rest } = props; // Set default size

  return (
    <div className="relative">
      {iconAmount > 0 && (
        <p className="absolute text-white-10 text-xs font-normal bg-red-500 rounded-full left-[10px] bottom-[18px] px-1">
          {iconAmount > 10 ? `10+` : iconAmount}
        </p>
      )}
      {cloneElement(children, { ...rest })}
    </div>
  );
};
