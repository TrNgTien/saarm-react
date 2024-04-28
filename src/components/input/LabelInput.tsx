import { Styles } from '@/theme';
import clsx from 'clsx';
import { HTMLInputTypeAttribute, KeyboardEvent } from 'react';

export const LabelInput = (props: {
  title: string;
  onChange: (e: any) => void;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  labelStyles: string;
  inputStyles?: string;
  wrapperStyles?: string;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  value?: string | readonly string[] | number | undefined;
  name?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  errorText?: string;
}) => {
  const {
    title,
    onChange,
    placeholder,
    type = 'text',
    labelStyles,
    inputStyles,
    wrapperStyles,
    value,
    readOnly,
    required,
    name,
    errorText,
    onKeyDown,
  } = props;
  return (
    <div className={clsx(Styles.FLEX_COL, wrapperStyles)}>
      <label htmlFor={title} className={clsx('text-sm', labelStyles)}>
        {title}
      </label>
      <input
        className={clsx(
          'border rounded-md p-4 shadow-md bg-white-900 focus:outline-none text-sm mt-1',
          inputStyles,
        )}
        type={type}
        autoComplete="off"
        onKeyDown={onKeyDown}
        readOnly={readOnly}
        required={required}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="text-red-400">{errorText}</p>
    </div>
  );
};
