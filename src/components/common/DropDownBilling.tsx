import { Color } from '@/theme';
import { IoMdNotificationsOutline as NotificationIcon } from 'react-icons/io';
import { MoneyText } from '../text';

export const DropDownBilling = (props: { value: string }) => {
  const { value } = props;
  return (
    <div className="flex w-full items-center p-4 shadow-md border border-white-20 rounded-lg overflow-y-auto">
      <div className="p-2 bg-green-200 rounded-full ml-2 mr-4">
        <NotificationIcon size={24} strokeWidth={0.5} color={Color.BLACK} />
      </div>
      <div className="flex flex-col">
        <p>Tien nha thang 2/2024</p>
        <MoneyText value={value} />
      </div>
    </div>
  );
};
