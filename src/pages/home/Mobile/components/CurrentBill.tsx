import { EMethods, IRoomBill } from '@/common';
import { RestEndpoints, RoutePath } from '@/common/constants';
import { Divider, MoneyText, SkeletonWrapper } from '@/components';
import { ShowMore } from '@/components/layout/ShowMoreList';
import { getDecodedToken } from '@/helpers';
import { networkInstance } from '@/services';
import { Styles } from '@/theme';
import dayjs from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaMoneyCheckDollar } from 'react-icons/fa6';

export const CurrentBill = () => {
  const token = useMemo(getDecodedToken, [getDecodedToken]);
  const [roomBill, setRoomBill] = useState<IRoomBill>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRoomBill = useCallback(async () => {
    try {
      setIsLoading(true);
      const params = new URLSearchParams({
        monthRequest: dayjs().toISOString(),
      });
      const rs = await networkInstance.send({
        method: EMethods.GET,
        path: `${RestEndpoints.ROOM}/${token?.roomId}/bills`,
        params,
      });

      if (!rs.success) {
        return;
      }

      const waterMoney = Number(rs.data.waterConsume ?? 0) * 20_000;
      const electricityMoney = Number(rs.data.electricityConsume ?? 0) * 3500;
      const extraFeeMoney = 0;
      const totalMoney =
        waterMoney +
        electricityMoney +
        Number(rs.data.roomPrice) +
        extraFeeMoney;

      const bill = {
        ...rs.data,
        waterMoney,
        electricityMoney: +rs.data.electricityConsume * 3500,
        totalMoney,
      };

      setRoomBill(bill);
    } catch (e) {
      console.error('[getRoom] | %s', e);
    } finally {
      setIsLoading(false);
    }
  }, [dayjs, token]);

  useEffect(() => {
    getRoomBill();
  }, []);

  return isLoading ? (
    <SkeletonWrapper stylesOverride="mt-2" />
  ) : (
    <div className="shadow-2xl mt-2 text-white-10 xs:rounded-xl lsm:rounded-3xl bg-green-80">
      <div className="xs:p-4 lsm:p-6">
        <ShowMore
          path={RoutePath.BILLING}
          isDisable={isLoading}
          title={`Tiền nhà tháng ${dayjs().month()}, ${dayjs().year()}`}
          navigateTitle={'Xem chi tiết'}>
          <div className="flex items-center jutify-center my-4 shadow-2xl">
            <FaMoneyCheckDollar size={24} />
            <MoneyText
              styling="ml-2 font-semibold text-3xl"
              value={`${roomBill?.totalMoney}`}
            />
          </div>
          <Divider lineStyle="border border-white-10" />
          <div className={`${Styles.FLEX_ALIGN_CENTER} my-4`}>
            <p className="font-semibold">{'Tiền Phòng:'}</p>
            <MoneyText styling="ml-2" value={`${roomBill?.roomPrice}`} />
          </div>
          <div className={`${Styles.FLEX_BETWEEN} w-full`}>
            <div>
              <p className="font-semibold">Điện</p>
              <MoneyText value={`${roomBill?.electricityMoney}`} />
            </div>
            <div>
              <p className="font-semibold">Nước</p>
              <MoneyText value={`${roomBill?.waterMoney}`} />
            </div>
            <div>
              <p className="font-semibold">Khác</p>
              <MoneyText value={`${roomBill?.extraFee || '0'}`} />
            </div>
          </div>
        </ShowMore>
      </div>
    </div>
  );
};
