export const NumericInput = (props: {
  value: string;
  onChange: (e: any) => void;
}) => {
  const { value, onChange } = props ?? {};
  return (
    <input
      type="text"
      pattern="[0-9]+([,][0-9]{1,2})?"
      name="amount"
      value={value}
      onChange={onChange}
    />
  );
};
