import { EMethods } from '@/common';
import { RestEndpoints, RoutePath } from '@/common/constants';
import { Button, LabelInput, Loading, PageHeader } from '@/components';
import { networkInstance } from '@/services';
import { useSnackbar } from 'notistack';
import { Suspense, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IApartment {
  name: string;
  locationUrl: string;
  address: string;
  totalRoom: number;
  roomAvailable: number;
}

const ApartmentCreate = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [apartment, setApartment] = useState<IApartment>({
    name: '',
    locationUrl: '',
    address: '',
    totalRoom: 0,
    roomAvailable: 0,
  });
  const [isTriggerCreate, setIsTriggerCreate] = useState<boolean>(false);

  const handleCreateApartment = useCallback(async () => {
    try {
      setIsTriggerCreate(true);

      if (!apartment.name || !apartment.address) {
        throw Error('Xảy ra lỗi, không thể tạo!');
      }

      const rs = await networkInstance.send({
        method: EMethods.POST,
        path: RestEndpoints.APARTMENTS,
        body: apartment,
      });

      if (!rs.success) {
        throw Error('Xảy ra lỗi, không thể tạo!');
      }

      enqueueSnackbar(`Tạo thành công!`, {
        variant: 'success',
      });

      setTimeout(() => {
        navigate(RoutePath.HOME);
      }, 1000);
    } catch (e) {
      console.error('[handleBasicLogin] | %s', e);

      enqueueSnackbar(`${e}`, {
        variant: 'error',
      });
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [navigate, apartment]);

  return (
    <Suspense fallback={<Loading />}>
      <PageHeader title={'Tạo nhà trọ'} />
      {isLoading && <Loading />}
      <div className="p-4">
        <LabelInput
          title={'Tên nhà trọ'}
          onChange={(e: any) => {
            setApartment((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          errorText={
            !apartment.name && isTriggerCreate ? 'Thiếu tên nhà trọ' : ''
          }
          value={apartment.name}
          name="name"
          required
          placeholder="Tên nhà trọ"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <LabelInput
          title={'Địa chỉ nhà trọ'}
          onChange={(e: any) => {
            setApartment((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          errorText={
            !apartment.address && isTriggerCreate ? 'Thiếu địa chỉ nhà trọ' : ''
          }
          value={apartment.address}
          name="address"
          required
          placeholder="Địa chỉ nhà trọ"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <LabelInput
          title={'Link Google Maps dẫn tới nhà trọ'}
          onChange={(e: any) => {
            setApartment((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          value={apartment.locationUrl}
          name="locationUrl"
          required
          placeholder="VD: https://maps.app.goo.gl/...."
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <LabelInput
          title={'Tổng số phòng'}
          value={apartment.totalRoom}
          onChange={(e: any) => {
            setApartment((prev) => ({
              ...prev,
              [e.target.name]: Number(e.target.value),
            }));
          }}
          name="totalRoom"
          type={'number'}
          required
          placeholder="Tống số phòng"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <LabelInput
          title={'Số phòng trống hiện tại'}
          onChange={(e: any) => {
            setApartment((prev) => ({
              ...prev,
              [e.target.name]: Number(e.target.value),
            }));
          }}
          value={apartment.roomAvailable}
          name="roomAvailable"
          required
          type={'number'}
          placeholder="Số phòng trống hiện tại"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <Button
          title={'Tạo mới'}
          titleStyles="text-black-100 font-semibold text-sm"
          onClick={handleCreateApartment}
          btnStyles={'bg-green-300 text-black-100 font-semibold text-sm'}
        />
      </div>
    </Suspense>
  );
};

export default ApartmentCreate;
