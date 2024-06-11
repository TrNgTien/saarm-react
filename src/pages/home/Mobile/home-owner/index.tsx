import { EMethods, IApartment } from '@/common';
import { RestEndpoints } from '@/common/constants';
import { Button } from '@/components';
import { getDecodedToken } from '@/helpers';
import { cn } from '@/lib/utils';
import { networkInstance } from '@/services';
import { Styles } from '@/theme';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { HomeCard } from './components/HomeCard';

const HomeMobile = () => {
  const [apartments, setApartments] = useState<IApartment[]>([]);
  const token = useMemo(getDecodedToken, [getDecodedToken]);

  const getApartments = useCallback(async () => {
    const apartmentData = await networkInstance.send({
      method: EMethods.GET,
      path: `${RestEndpoints.APARTMENTS}/users/${token?.userId}`,
    });

    if (!apartmentData.success) {
      throw Error('Can not get apartment!');
    }

    setApartments(apartmentData?.data);
  }, []);

  useEffect(() => {
    getApartments();
  }, []);

  return (
    <div className="text-white-10 h-screen bg-white-50  m-4">
      <input
        type="text"
        className="border p-4 rounded-lg w-full"
        placeholder="Tìm theo số nhà"
        onChange={() => {}}
      />
      <div className={cn(Styles.FLEX_BETWEEN, 'text-black-900 p-4')}>
        <p className="flex-1">Danh sách nhà</p>
        <Button
          title="Thêm"
          onClick={() => {}}
          btnStyles="bg-green-200 border w-[30%]"
          titleStyles="font-semibold"
        />
      </div>
      <div>
        {apartments.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <HomeCard {...item} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default memo(HomeMobile);
