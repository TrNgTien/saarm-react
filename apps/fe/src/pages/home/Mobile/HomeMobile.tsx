import Billing from '@/assets/icons/billing.svg';
import Citizen from '@/assets/icons/citizen.svg';
import Statistic from '@/assets/icons/statistic.svg';
import UpdateWater from '@/assets/icons/update-water.svg';
import { RoutePath } from '@/common/constants';
import { Banner, DropDownBilling } from '@/components';
import { UtilityCircle } from '@/components/common/UtilityCircle';
import { ShowMore } from '@/components/layout/ShowMoreList';
import { Style } from '@/theme';
import { memo } from 'react';
import { CurrentBill } from './components';

const ICON_STYLE = 'bg-green-200 rounded-full p-2 h-14';
const utilityItems = [
  {
    id: 'update-water-meter',
    name: 'Cap nhật đồng hồ nước',
    icon: (
      <img
        alt={'icon'}
        src={UpdateWater}
        loading="lazy"
        className={ICON_STYLE}
      />
    ),
  },
  {
    id: 'bill',
    name: 'Thanh toán tiền nhà',
    icon: (
      <img alt={'icon'} src={Billing} loading="lazy" className={ICON_STYLE} />
    ),
  },
  {
    id: 'citizen',
    name: 'Thong tin lưu trú',
    icon: (
      <img alt={'icon'} src={Citizen} loading="lazy" className={ICON_STYLE} />
    ),
  },
  {
    id: 'statistic',
    name: 'Thống kê chi phí',
    icon: (
      <img alt={'icon'} src={Statistic} loading="lazy" className={ICON_STYLE} />
    ),
  },
];

const HomeMobile = () => {
  return (
    <div className="text-white-10 h-screen">
      <div className="bg-[#0A150F] h-2/6 text-white-10 p-4">
        {true ? <Banner /> : null}
        <CurrentBill />
      </div>
      <div className="xs:mt-14 mt-8 text-black-900 p-4">
        <ShowMore path={RoutePath.UTIL} title={'Tiện ích'}>
          <div className={`${Style.FLEX_BETWEEN} pt-2`}>
            {utilityItems.map((i) => {
              const { id, ...rest } = i;
              return <UtilityCircle key={id} {...rest} />;
            })}
          </div>
        </ShowMore>
        <div className="mt-8">
          <ShowMore path={RoutePath.UTIL} title={'Hóa đơn gần đây'}>
            <div className="max-h-60 overflow-auto">
              {utilityItems.map((i, idx) => {
                const { id } = i;
                return (
                  <div className="my-2" key={`${id}-${idx}`}>
                    <DropDownBilling value={'200000'} />
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
