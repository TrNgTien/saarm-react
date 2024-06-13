import { EMethods, IApartmentRoom } from '@/common';
import { RestEndpoints, RoutePath } from '@/common/constants';
import { Button, Loading, PageHeader } from '@/components';
import { cn } from '@/lib/utils';
import { networkInstance } from '@/services';
import { Styles } from '@/theme';
import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { LuPlus as PlusIcon } from 'react-icons/lu';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { RoomCard } from './components/RoomCard';

const DetailApartment = () => {
  const { id = '' } = useParams();
  const { state } = useLocation();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [rooms, setRooms] = useState<IApartmentRoom[]>([]);

  const getRoomsByApartmentId = useCallback(async () => {
    try {
      setIsLoading(true);
      const rs = await networkInstance.send({
        method: EMethods.GET,
        path: `${RestEndpoints.APARTMENTS}/${id}/rooms`,
      });

      if (!rs.success) {
        throw Error('Can not get apartment!');
      }

      setRooms(rs?.data || []);
    } catch (e) {
      throw Error(`[getApartments]: ${e}`);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (!state.name) {
      return navigate(RoutePath.HOME);
    }

    getRoomsByApartmentId();
  }, [getRoomsByApartmentId, state.name]);

  return (
    <Suspense fallback={<Loading />}>
      <PageHeader title={state.name} />
      <div className="h-screen p-4">
        {isLoading && <Loading />}
        <div className={cn(Styles.FLEX_BETWEEN, 'text-black-900')}>
          <p className="font-semibold text-black-100">Danh sách phòng</p>
          <div>
            <Button
              title="Thêm"
              onClick={() => navigate(`${RoutePath.APARTMENT}/${id}/room`)}
              btnStyles="bg-[#E3EFE9] border border-[#9EC4AF] px-10"
              titleStyles="font-semibold text-md ml-2">
              <PlusIcon />
            </Button>
          </div>
        </div>
        <div className="mt-8">
          {!isLoading && !rooms?.length ? (
            <h1>Vui lòng thêm mới thông tin nhà để quản lí</h1>
          ) : (
            rooms.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <RoomCard {...item} />
                </React.Fragment>
              );
            })
          )}
        </div>
      </div>
    </Suspense>
  );
};
export default DetailApartment;
