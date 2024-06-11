import { EMethods, IApartment } from '@/common';
import { RestEndpoints, RoutePath } from '@/common/constants';
import { Button, Loading } from '@/components';
import { getDecodedToken } from '@/helpers';
import { cn } from '@/lib/utils';
import { networkInstance } from '@/services';
import { Styles } from '@/theme';
import React, {
  Suspense,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { LuPlus as PlusIcon } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { HomeCard } from './components/HomeCard';

const HomeMobile = () => {
  const [apartments, setApartments] = useState<IApartment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const token = useMemo(getDecodedToken, [getDecodedToken]);

  const getApartments = useCallback(async () => {
    try {
      setIsLoading(true);
      const rs = await networkInstance.send({
        method: EMethods.GET,
        path: `${RestEndpoints.APARTMENTS}/users/${token?.userId}`,
      });

      if (!rs.success) {
        throw Error('Can not get apartment!');
      }

      setApartments(rs?.data || []);
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
    <Suspense fallback={<Loading />}>
      <div className="h-screen p-4">
        {isLoading && <Loading />}
        <div className={cn(Styles.FLEX_BETWEEN, 'text-black-900 py-4')}>
          <p className="font-semibold text-black-100">Danh sách nhà</p>
          <div>
            <Button
              title="Thêm"
              onClick={() => navigate(RoutePath.APARTMENT_CREATE)}
              btnStyles="bg-[#E3EFE9] border border-[#9EC4AF] px-10"
              titleStyles="font-semibold text-md ml-2">
              <PlusIcon />
            </Button>
          </div>
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
    </Suspense>
  );
};

export default memo(HomeMobile);
