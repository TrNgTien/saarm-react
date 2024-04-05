import { RoutePath } from '@/common/constants';
import { Banner, DropDownBilling } from '@/components';
import { UtilityCircle } from '@/components/common/UtilityCircle';
import { ShowMore } from '@/components/layout/ShowMoreList';
import { memo } from 'react';
import { CurrentBill } from './components';

const utilityItems = [
  {
    id: 'update-water-meter',
    name: 'Cap nhat dong ho nuoc',
    icon: '',
  },
  {
    id: 'payment',
    name: 'Thanh toan tien nha',
    icon: '',
  },
  {
    id: 'payment',
    name: 'Thong tin luu tru',
    icon: '',
  },
  {
    id: 'payment',
    name: 'Thong ke chi phi',
    icon: '',
  },
];

const HomeMobile = () => {
  return (
    <div className="text-white-10 h-screen">
      <div className="bg-[#0A150F] h-2/5 text-white-10 p-4">
        {true ? <Banner /> : null}
        <CurrentBill />
      </div>
      <div className="mt-12 h-3/6 text-red-500 p-4">
        <ShowMore
          path={RoutePath.UTIL}
          title={'Tien ich'}
          navigateTitle={'Xem chi tiết'}>
          <div className="flex items-center justify-between mt-8">
            {utilityItems.map((i) => {
              const { id, ...rest } = i;
              return <UtilityCircle key={id} {...rest} />;
            })}
          </div>
        </ShowMore>
        <div className="mt-8">
          <ShowMore
            path={RoutePath.UTIL}
            title={'Hoa don gan day'}
            navigateTitle={'Xem them'}>
            <div className="mt-8 w-full">
              {utilityItems.map((i) => {
                const { id } = i;
                return (
                  <div className="my-4">
                    <DropDownBilling key={id} value={'200000'} />
                  </div>
                );
              })}
            </div>
          </ShowMore>
        </div>
      </div>
    </div>
  );
};

export default memo(HomeMobile);
