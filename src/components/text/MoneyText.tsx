export const MoneyText = (props: { value: string; styling?: string }) => {
  const { value, styling } = props;
  const number = parseInt(value, 10);

  const formattedNumber = number.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    <p className={styling}>
      {isNaN(number) ? 'Chua cap nhat' : formattedNumber}
    </p>
  );
};
