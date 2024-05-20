import { EMethods, IRoomBill } from '@/common';
import { RestEndpoints, RoutePath } from '@/common/constants';
import { Divider, MoneyText } from '@/components';
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

  const getRoomBill = useCallback(async () => {
    try {
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
    }
  }, [dayjs, token]);

  useEffect(() => {
    getRoomBill();
  }, []);

  return (
    <div className="shadow-2xl mt-2 text-white-10 xs:rounded-xl lsm:rounded-3xl bg-green-80">
      <div className="xs:p-4 lsm:p-6">
        <ShowMore
          path={RoutePath.WATER_METER}
          title={`Tiền nhà tháng ${dayjs().month()}, ${dayjs().year()}`}
          navigateTitle={'Xem chi tiết'}>
          <div className="flex items-center jutify-center my-4 shadow-2xl">
            <FaMoneyCheckDollar size={24} />
            <MoneyText
              styling="ml-2 font-semibold text-3xl"
              value={`${roomBill?.roomPrice}`}
            />
          </div>
          <Divider lineStyle="border border-white-10" />
          <div className={`${Styles.FLEX_BETWEEN} w-full mt-6`}>
            <div>
              <p className="font-semibold">{'Điện'}</p>
              <MoneyText value={`${roomBill?.electricityMoney}`} />
            </div>
            <div>
              <p className="font-semibold">{'Nước'}</p>
              <MoneyText value={`${roomBill?.waterMoney}`} />
            </div>
            <div>
              <p className="font-semibold">{'Khác'}</p>
              <MoneyText value={`${roomBill?.extraFee}`} />
            </div>
          </div>
          <div className="flex mt-8">
            <p className="font-semibold text-xl mr-2">{'Tổng tiền: '}</p>
            <MoneyText styling="text-lg" value={`${roomBill?.totalMoney}`} />
          </div>
        </ShowMore>
      </div>
    </div>
  );
};
