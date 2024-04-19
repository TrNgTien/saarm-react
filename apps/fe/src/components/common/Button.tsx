import clsx from 'clsx';

interface IButtonProps {
  title: string;
  onClick: () => void;
  btnStyle: string;
}
export const Button = (props: IButtonProps) => {
  const { title, onClick, btnStyle } = props;
  return (
    <button
      onClick={onClick}
      className={clsx('shadow shadow-md rounded-md w-full p-2', btnStyle)}>
      {title}
    </button>
  );
};
