import { Styles } from '@/theme';

export const UtilityCircle = (props: { name: string; icon: any }) => {
  const { name, icon } = props;
  return (
    <div className={`${Styles.FLEX_CENTER} flex-col max-w-28`}>
      <div>{icon}</div>
      <p className="text-center text-black-400 text-sm">{name}</p>
    </div>
  );
};
