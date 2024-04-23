import { Styles } from '@/theme';
import clsx from 'clsx';
import { HTMLInputTypeAttribute } from 'react';

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
        readOnly={readOnly}
        required={required}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
