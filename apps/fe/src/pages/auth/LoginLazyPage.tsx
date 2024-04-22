import GoogleIc from '@/assets/icons/google.svg';
import Logo from '@/assets/icons/logo-dark.svg';
import { EMethods } from '@/common';
import { RestEndpoints, RoutePath } from '@/common/constants';
import {
  Button,
  Divider,
  IconImage,
  IconWrapper,
  LabelInput,
} from '@/components';
import { networkInstance } from '@/services';
import { Styles } from '@/theme';
import { useGoogleLogin } from '@react-oauth/google';
import clsx from 'clsx';
import { useState } from 'react';
import { BsQuestionCircle as QuestionIcon } from 'react-icons/bs';
import { FaRegEyeSlash as ClosedIcon } from 'react-icons/fa';
import { LiaEyeSolid as EyeOpenIcon } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';

interface IUserGoogle {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
}

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const loginGoogle = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const googleInformation: IUserGoogle = await networkInstance.send({
        method: EMethods.POST,
        path: RestEndpoints.LOGIN_GOOGLE,
        body: {
          code,
        },
      });

      console.log(googleInformation);
    },
    flow: 'auth-code',
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-end text-black-400 text-sm">
        <IconWrapper size={20}>
          <QuestionIcon />
        </IconWrapper>
        <p className="ml-2">Hỗ trợ</p>
      </div>
      <div className="mt-8 text-center">
        <IconImage src={Logo} height={60} width={60} styles="mx-auto" />
        <h1 className="font-bold text-xl my-2">Placepad</h1>
        <h3 className="font-medium text-sm text-black-800">
          Đăng nhập để tiếp tục
        </h3>
      </div>
      <Button
        title="Đăng nhập với Google"
        onClick={loginGoogle}
        titleStyles="text-sm font-semibold text-black-200"
        btnStyles="mt-4 border">
        <IconImage src={GoogleIc} height={24} width={24} styles="mr-2" />
      </Button>
      <Divider
        textSeparate={true}
        textMid="Hoặc"
        lineStyle="border border-black-300 my-6"
        textStyle="text-black-400 text-sm"
      />
      <form className="">
        <LabelInput
          title={'Tên đăng nhập'}
          onChange={(e: any) => {
            setUserInfo((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          name="username"
          placeholder="Tên đăng nhập"
          labelStyles="font-semibold text-black-400"
          wrapperStyles="mb-4"
        />

        <div className="relative">
          <LabelInput
            onChange={(e: any) => {
              setUserInfo((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            title={'Mật khẩu'}
            name="password"
            type={isShowPassword ? 'text' : 'password'}
            placeholder="Mật khẩu"
            labelStyles="font-semibold text-black-400"
          />
          <div
            className="absolute right-4 top-10 bg-white-900"
            onClick={() => setIsShowPassword((prev) => !prev)}>
            <IconWrapper size={24}>
              {isShowPassword ? <EyeOpenIcon /> : <ClosedIcon />}
            </IconWrapper>
          </div>
        </div>
      </form>
      <p className="float-end my-4 text-green-80 text-sm font-semibold">
        Quên mật khẩu?
      </p>
      <Button
        title={'Đăng nhập'}
        titleStyles="text-black-100 font-semibold text-sm"
        onClick={() => navigate(RoutePath.LOGIN)}
        btnStyles={'bg-green-300 text-black-100 font-semibold text-sm'}
      />
      <div className={clsx(Styles.FLEX_CENTER, 'mt-2')}>
        <h3 className="text-sm mr-2 text-black-400">Chưa có tài khoản?</h3>
        <h1 className="font-semibold text-black-900 text-sm my-2">
          Đăng kí ngay
        </h1>
      </div>
    </div>
  );
};
export default AuthPage;
