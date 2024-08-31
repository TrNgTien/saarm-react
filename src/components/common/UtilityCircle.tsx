import { IUtilityCircle } from '@/common';
import { cn } from '@/lib/utils';
import { Styles } from '@/theme';

export const UtilityCircle = (props: IUtilityCircle) => {
  const { name, icon, onClick } = props;
  return (
    <div
      className={cn(Styles.FLEX_CENTER, 'flex-col max-w-28')}
      onClick={onClick}>
      <div>{icon}</div>
      <p className="text-center text-black-400 text-sm">{name}</p>
    </div>
  );
};
