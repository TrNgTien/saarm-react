import { RoutePath } from '@/common/constants';
import { Divider, MoneyText } from '@/components';
import { ShowMore } from '@/components/layout/ShowMoreList';
import { Styles } from '@/theme';
import dayjs from 'dayjs';
import { FaMoneyCheckDollar } from 'react-icons/fa6';

const billItems = [
  {
    id: 'electricity',
    name: 'Điện',
    content: '2000',
  },
  {
    id: 'water',
    name: 'Nước',
    content: '200000',
  },
  {
    id: 'others',
    name: 'Khác',
    content: '200000',
  },
];

export const CurrentBill = () => {
  return (
    <div className="shadow-2xl mt-2 text-white-10 rounded-3xl bg-green-80">
      <div className="p-6">
        <ShowMore
          path={RoutePath.WATER_METER}
          title={`Tiền nhà tháng ${dayjs().month()}, ${dayjs().year()}`}
          navigateTitle={'Xem chi tiết'}>
          <div className="flex items-center jutify-center my-4 shadow-2xl">
            <FaMoneyCheckDollar size={24} />
            <MoneyText
              styling="ml-2 font-semibold text-3xl"
              value={'2739000'}
            />
          </div>
          <Divider lineStyle="border border-white-10" />
          <div className={`${Styles.FLEX_BETWEEN} w-full mt-6`}>
            {billItems.map((i) => {
              const { name, id, content } = i;
              return (
                <div key={id}>
                  <p className="font-semibold">{name}</p>
                  <MoneyText value={content} />
                </div>
              );
            })}
          </div>
        </ShowMore>
      </div>
    </div>
  );
};
