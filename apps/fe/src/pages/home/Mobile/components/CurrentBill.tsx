import { RoutePath } from '@/common/constants';
import { Divider, MoneyText } from '@/components';
import { ShowMore } from '@/components/layout/ShowMoreList';
import { FaMoneyCheckDollar } from 'react-icons/fa6';

const billItems = [
  {
    id: 'electricity',
    name: 'Dien',
    content: '2000',
  },
  {
    id: 'water',
    name: 'Nuoc',
    content: '200000',
  },
  {
    id: 'others',
    name: 'Khac',
    content: '200000',
  },
];

export const CurrentBill = () => {
  return (
    <div className="shadow-2xl mt-4 text-white-10 rounded-xl bg-green-80">
      <div className="p-6">
        <ShowMore
          path={RoutePath.WATER_METER}
          title={'Tiền nhà tháng 3, 2024'}
          navigateTitle={'Xem chi tiết'}>
          <div className="flex items-center jutify-center my-4 shadow-2xl">
            <FaMoneyCheckDollar size={24} />
            <MoneyText styling="ml-2 font-black text-3xl" value={'2739000'} />
          </div>
          <Divider />
          <div className="flex w-full justify-between mt-8 pb-2">
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
