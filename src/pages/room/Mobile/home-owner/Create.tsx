import { EMethods } from '@/common';
import { RestEndpoints } from '@/common/constants';
import {
  Button,
  LabelInput,
  Loading,
  NumericInput,
  PageHeader,
} from '@/components';
import { networkInstance } from '@/services';
import { useSnackbar } from 'notistack';
import { Suspense, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface IRoom {
  username: string;
  password: string;
  name: string;
  roomPrice: string;
  maxPeople: number;
  currentPeople: number;
  apartmentId?: string;
}

const RoomCreate = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { id = '' } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [room, setRoom] = useState<IRoom>({
    username: '',
    password: '',
    name: '',
    roomPrice: '',
    maxPeople: 3,
    currentPeople: 0,
    apartmentId: id,
  });
  const [isTriggerCreate, setIsTriggerCreate] = useState<boolean>(false);

  const handleCreateroom = useCallback(async () => {
    try {
      setIsTriggerCreate(true);

      if (!room.name || !room.password || !room.password) {
        throw Error(
          'Xảy ra lỗi, không thể tạo, thiếu tên phòng, tài khoản và mật khẩu!',
        );
      }

      const rs = await networkInstance.send({
        method: EMethods.POST,
        path: RestEndpoints.ROOM,
        body: room,
      });

      if (!rs.success) {
        throw Error(`Xảy ra lỗi, không thể tạo: ${rs.message}`);
      }

      enqueueSnackbar(`Tạo thành công!`, {
        variant: 'success',
      });

      setTimeout(() => {
        navigate(-1);
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
  }, [navigate, room, id]);

  return (
    <Suspense fallback={<Loading />}>
      <PageHeader title={'Tạo Phòng'} />
      {isLoading && <Loading />}
      <div className="p-4">
        <LabelInput
          title={'Tên Phòng'}
          onChange={(e: any) => {
            setRoom((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          errorText={!room.name && isTriggerCreate ? 'Không được bỏ trống' : ''}
          name="name"
          required
          placeholder="Tên phòng"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <LabelInput
          title={'Tài khoản'}
          onChange={(e: any) => {
            setRoom((prev) => ({
              ...prev,
              [e.target.name]: e.target.value.toLowerCase(),
            }));
          }}
          errorText={
            !room.username && isTriggerCreate ? 'Không được bỏ trống' : ''
          }
          value={room.username}
          name="username"
          required
          placeholder="Tài khoản cho phòng trọ"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <LabelInput
          title={'Mật khẩu'}
          onChange={(e: any) => {
            setRoom((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          errorText={
            !room.password && isTriggerCreate ? 'Không được bỏ trống' : ''
          }
          value={room.password}
          name="password"
          required
          placeholder="Mật khẩu cho phòng trọ"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <NumericInput
          title={'Tiền phòng'}
          onChange={(e: any) => {
            setRoom((prev) => ({
              ...prev,
              [e.target.name]: e.target.value.replace(/,*/gm, ''),
            }));
          }}
          errorText={
            !room.roomPrice && isTriggerCreate ? 'Không được bỏ trống' : ''
          }
          name="roomPrice"
          required
          placeholder="VD: 2000000"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <LabelInput
          title={'Số lượng người tối đa trong của phòng'}
          onChange={(e: any) => {
            setRoom((prev) => ({
              ...prev,
              [e.target.name]: +e.target.value,
            }));
          }}
          type={'number'}
          name="maxPeople"
          required
          placeholder="VD: 3"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <LabelInput
          title={'Số người đã ở trong phòng'}
          onChange={(e: any) => {
            setRoom((prev) => ({
              ...prev,
              [e.target.name]: +e.target.value,
            }));
          }}
          type={'number'}
          name="currentPeople"
          required
          placeholder="VD: 0"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <Button
          title={'Tạo mới'}
          titleStyles="text-black-100 font-semibold text-sm"
          onClick={handleCreateroom}
          btnStyles={'bg-green-300 text-black-100 font-semibold text-sm'}
        />
      </div>
    </Suspense>
  );
};

export default RoomCreate;
