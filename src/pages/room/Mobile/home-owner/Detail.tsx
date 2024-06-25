import { EMethods, IHistory } from '@/common';
import { RestEndpoints } from '@/common/constants';
import { InformationCard, Loading, PageHeader } from '@/components';
import { cn } from '@/lib/utils';
import { networkInstance } from '@/services';
import { Styles } from '@/theme';
import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const DetailRoom = () => {
  const { id = '' } = useParams();
  const { state } = useLocation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [histories, setHistories] = useState<IHistory[]>([]);
  const getHistorySubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const rs = await networkInstance.send({
        method: EMethods.GET,
        path: `${RestEndpoints.ROOM}/${id}/${RestEndpoints.HISTORY_WATER_METER}`,
      });

      if (!rs.data) {
        return;
      }

      setHistories(rs?.data || []);
    } catch (e) {
      console.error('[getHistorySubmit]: | %s', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getHistorySubmit();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <PageHeader title={state?.name} />
      <div className="h-screen p-4">
        {isLoading && <Loading />}
        <div className={cn(Styles.FLEX_BETWEEN, 'text-black-900')}>
          <p className="font-semibold text-black-100">
            Danh sách lịch sử đã chụp
          </p>
        </div>
        <div className="mt-8">
          {!isLoading && !histories?.length ? (
            <h1>Phòng này chưa gửi bất kì ảnh nào</h1>
          ) : (
            histories.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <InformationCard imgSrc={''} {...item} />
                </React.Fragment>
              );
            })
          )}
        </div>
      </div>
    </Suspense>
  );
};
export default DetailRoom;
