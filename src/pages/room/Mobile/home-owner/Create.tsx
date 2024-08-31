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
  waterNumberInit: string;
  electricityNumberInit: string;
  extraFee: { name: string; value: any }[];
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
    waterNumberInit: '',
    electricityNumberInit: '',
    extraFee: [],
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
              [e.target.name]: e.target.value,
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
          title={'Số nước hiện tại:'}
          onChange={(e: any) => {
            setRoom((prev) => ({
              ...prev,
              [e.target.name]: e.target.value.slice(0, 7),
            }));
          }}
          errorText={
            !room.waterNumberInit && isTriggerCreate ? 'Không được bỏ trống' : ''
          }
          name="waterNumberInit"
          required
          placeholder="Nhập đủ 7 số đồng hồ nước vd: 0213345"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />
        <LabelInput
          title={'Số điện hiện tại:'}
          onChange={(e: any) => {
            setRoom((prev) => ({
              ...prev,
              [e.target.name]: e.target.value.slice(0, 5),
            }));
          }}
          errorText={
            !room.electricityNumberInit && isTriggerCreate ? 'Không được bỏ trống' : ''
          }
          name="electricityNumberInit"
          required
          placeholder="Nhập đủ 5 số đồng hồ điện vd: 093549"
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
        <div className="divider-section mb-4">
          <h3 className="font-semibold text-black-400 my-4">Phí dịch vụ:</h3>
          {room.extraFee.map((fee: any, index: number) => (
            <div key={index} className="flex flex-col mb-4 bg-gray-100 p-6 rounded-md">
              <LabelInput
                title={`Tên phí dịch vụ ${index + 1}:`}
                onChange={(e: any) => {
                  const newExtraFees = [...room.extraFee];
                  newExtraFees[index] = { ...newExtraFees[index], name: e.target.value };
                  setRoom((prev) => ({
                    ...prev,
                    extraFee: newExtraFees,
                  }));
                }}
                errorText={
                  !fee.name && isTriggerCreate ? 'Không được bỏ trống' : ''
                }
                name={`extraFeeName${index}`}
                required
                placeholder="Nhập tên phí dịch vụ"
                labelStyles="font-semibold text-black-400"
                wrapperStyles="mb-2"
              />
              <NumericInput
                title={`Giá trị phí dịch vụ ${index + 1}:`}
                onChange={(e: any) => {
                  const newExtraFees = [...room.extraFee];
                  newExtraFees[index] = {
                    ...newExtraFees[index],
                    value: e.target.value.replace(/,*/gm, '')
                  };
                  setRoom((prev) => ({
                    ...prev,
                    extraFee: newExtraFees,
                  }));
                }}
                errorText={
                  !fee.value && isTriggerCreate ? 'Không được bỏ trống' : ''
                }
                name={`extraFeeValue${index}`}
                required
                placeholder="Nhập giá trị phí dịch vụ"
                labelStyles="font-semibold text-black-400"
                wrapperStyles="mb-2"
              />
            </div>
          ))}
          <div className="flex flex-col">
            <div className="flex justify-between mb-4">
              <Button
                title={'Thêm phí dịch vụ'}
                titleStyles="text-black-100 font-semibold text-sm"
                onClick={() => {
                  setRoom((prev) => ({
                    ...prev,
                    extraFee: [...prev.extraFee, { name: '', value: '' }],
                  }));
                }}
                btnStyles={`bg-blue-300 text-black-100 font-semibold text-sm rounded-full ${room.extraFee.length > 0 ? 'w-1/2' : 'w-full'} h-10 mr-2`}
              />
              {room.extraFee.length > 0 && (
                <Button
                  title={'Xóa phí dịch vụ'}
                  titleStyles="text-black-100 font-semibold text-sm"
                  onClick={() => {
                    const newExtraFees = [...room.extraFee];
                    newExtraFees.pop();
                    setRoom((prev) => ({
                      ...prev,
                      extraFee: newExtraFees,
                    }));
                  }}
                  btnStyles={'bg-red-300 text-black-100 font-semibold text-sm rounded-full w-1/2 h-10 ml-2'}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            title={'Tạo phòng'}
            titleStyles="text-black-100 font-semibold text-sm"
            onClick={handleCreateroom}
            btnStyles={'bg-green-300 text-black-100 font-semibold text-sm'}
          />
        </div>
      </div>
    </Suspense >
  );
};

export default RoomCreate;
