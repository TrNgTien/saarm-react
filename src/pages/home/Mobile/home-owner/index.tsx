import { EMethods, IApartment } from '@/common';
import { RestEndpoints } from '@/common/constants';
import { Loading } from '@/components';
import { getDecodedToken } from '@/helpers';
import { cn } from '@/lib/utils';
import { networkInstance } from '@/services';
import { Styles } from '@/theme';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { HomeCard } from './components/HomeCard';

const HomeMobile = () => {
  const [apartments, setApartments] = useState<IApartment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const token = useMemo(getDecodedToken, [getDecodedToken]);

  const getApartments = useCallback(async () => {
    try {
      setIsLoading(true);
      const apartmentData = await networkInstance.send({
        method: EMethods.GET,
        path: `${RestEndpoints.APARTMENTS}/users/${token?.userId}`,
      });

      if (!apartmentData.success) {
        throw Error('Can not get apartment!');
      }

      setApartments(apartmentData?.data);
    } catch (e) {
      throw Error(`[getApartments]: ${e}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getApartments();
  }, []);

  return (
    <div className="h-screen m-4">
      {isLoading && <Loading />}

      <div className={cn(Styles.FLEX_BETWEEN, 'text-black-900 py-4')}>
        <p className="w-10/12 font-semibold text-black-100">Danh sách nhà</p>
        {/*
          <Button
            title="Thêm"
            onClick={() => console.log("clicked")}
            btnStyles="bg-[#E3EFE9] border border-[#9EC4AF] w-2/12 px-14"
            titleStyles="font-semibold text-md"
          />
        */}
      </div>
      <div>
        {!isLoading && !apartments?.length ? (
          <h1>Vui lòng thêm mới thông tin nhà để quản lí</h1>
        ) : (
          apartments.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <HomeCard {...item} />
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default memo(HomeMobile);
