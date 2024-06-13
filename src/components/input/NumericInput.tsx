import { cn } from '@/lib/utils';
import { Styles } from '@/theme';
import { NumericFormat } from 'react-number-format';

export const NumericInput = (props: {
  title: string;
  onChange: (e: any) => void;
  placeholder: string;
  labelStyles: string;
  inputStyles?: string;
  wrapperStyles?: string;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  value?: number | undefined;
  name?: string;
  errorText?: string;
  separator?: string | boolean | undefined;
}) => {
  const {
    title,
    onChange,
    placeholder,
    labelStyles,
    inputStyles,
    wrapperStyles,
    value,
    readOnly,
    required,
    name,
    errorText,
    separator = ',',
  } = props;
  return (
    <div className={cn(Styles.FLEX_COL, wrapperStyles)}>
      <label htmlFor={title} className={cn('text-sm', labelStyles)}>
        {title}
      </label>
      <NumericFormat
        className={cn(
          'border rounded-md p-4 shadow-md bg-white-900 focus:outline-none text-sm mt-1',
          inputStyles,
        )}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        readOnly={readOnly}
        value={value}
        thousandSeparator={separator}
      />
      <p className="text-red-400">{errorText}</p>
    </div>
  );
};
