import Billing from '@/assets/icons/billing.svg';
import Citizen from '@/assets/icons/citizen.svg';
import Statistic from '@/assets/icons/statistic.svg';
import UpdateWater from '@/assets/icons/update-water.svg';
import { IUtilityCircle } from '@/common';
import { RoutePath } from '@/common/constants';
import { Banner, IconImage } from '@/components';
import { UtilityCircle } from '@/components/common/UtilityCircle';
import { ShowMore } from '@/components/layout/ShowMoreList';
import { Styles } from '@/theme';
import { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentBill } from './components';

const ACTIVED_ICON_STYLE = 'bg-green-200 rounded-full p-2 h-14';
const DISABLED_ICON_STYLE = 'bg-gray-200 rounded-full p-2 h-14';

const HomeMobile = () => {
  const navigate = useNavigate();
  const utilityItems: IUtilityCircle[] = useMemo(
    () => [
      {
        id: 'update-water-meter',
        name: 'Lịch sử cập nhật đồng hồ nước',
        icon: <IconImage src={UpdateWater} styles={ACTIVED_ICON_STYLE} />,
        onClick: () => navigate(RoutePath.WATER_METER),
      },
      {
        id: 'bill',
        name: 'Thanh toán tiền nhà',
        icon: <IconImage src={Billing} styles={DISABLED_ICON_STYLE} />,
        onClick: () => { },
      },
      {
        id: 'citizen',
        name: 'Thông tin wifi',
        icon: <IconImage src={Citizen} styles={DISABLED_ICON_STYLE} />,
        onClick: () => { },
      },
      {
        id: 'statistic',
        name: 'Thống kê chi phí',
        icon: <IconImage src={Statistic} styles={DISABLED_ICON_STYLE} />,
        onClick: () => { },
      },
    ],
    [navigate],
  );

  return (
    <div className="text-white-10 h-screen bg-white-50">
      <div className="bg-[#0A150F] text-white-0 p-4">
        <Banner />
        <CurrentBill />
      </div>
      <div className="text-black-900 p-4">
        <ShowMore path={RoutePath.CURRENT_PAGE} title={'Tiện ích'}>
          <div className={`${Styles.FLEX_BETWEEN} pt-2 xs:text-sm`}>
            {utilityItems.map((i) => {
              const { id, ...rest } = i;
              return <UtilityCircle key={id} {...rest} />;
            })}
          </div>
        </ShowMore>
        <div className="xs:mt-4 mt-8">
          <ShowMore
            path={RoutePath.NOTIFICATION}
            hasShowMore={false}
            title={'Thông báo từ chủ nhà'}>
            <p className="m-2 italic">Hiện tại chưa có thông báo</p>
            {/* <div>
              {utilityItems.map((i, idx) => {
                const { id } = i;
                return (
                  <div className="my-2" key={`${id}-${idx}`}>
                    <DropDownBilling value={'2000000'} />
                  </div>
                );
              })}
            </div> */}
          </ShowMore>
        </div>
      </div>
    </div>
  );
};

export default memo(HomeMobile);
