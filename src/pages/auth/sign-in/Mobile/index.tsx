import GoogleIc from '@/assets/icons/google.svg';
import Logo from '@/assets/icons/logo-dark.svg';
import { EMethods } from '@/common';
import { RestEndpoints, RoutePath } from '@/common/constants';
import { ILoginForm } from '@/common/types/login';
import {
  Button,
  Divider,
  IconImage,
  IconWrapper,
  LabelInput,
  Loading,
} from '@/components';
import { networkInstance } from '@/services';
import { Styles } from '@/theme';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { KeyboardEvent, useCallback, useState } from 'react';
import { BsQuestionCircle as QuestionIcon } from 'react-icons/bs';
import { FaRegEyeSlash as ClosedIcon } from 'react-icons/fa';
import { FaGoogle as GoogleDisable } from 'react-icons/fa6';
import { LiaEyeSolid as EyeOpenIcon } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

const AuthPage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<ILoginForm>({
    username: '',
    password: '',
  });
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isTriggeredLogin, setIsTriggeredLogin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [_value, setToken] = useLocalStorage('token', '', {
    raw: true,
  });

  // const loginGoogle = useGoogleLogin({
  //   onSuccess: async ({ code }) => {
  //     try {
  //       // const googleInformation: IUserGoogle = await networkInstance.send({
  //       //   method: EMethods.POST,
  //       //   path: RestEndpoints.LOGIN_GOOGLE,
  //       //   body: {
  //       //     code,
  //       //   },
  //       // });
  //       console.log('[loginGoogle] ', code);
  //     } catch (e) {
  //       console.error('[loginGoogle]: ', e);
  //     }
  //   },
  //   flow: 'auth-code',
  // });

  const handleBasicLogin = useCallback(async () => {
    try {
      setIsTriggeredLogin(true);

      if (!userInfo.username || !userInfo.password) {
        return;
      }

      setIsLoading(true);

      const userData = await networkInstance.send({
        method: EMethods.POST,
        path: RestEndpoints.SIGN_IN,
        body: {
          ...userInfo,
          username: userInfo.username.toLowerCase(),
          password: userInfo.password.toLowerCase(),
        },
      });

      if (!userData.success) {
        throw Error('Can not get user!');
      }

      setToken(userData?.data?.value);

      setTimeout(() => {
        navigate(RoutePath.HOME);
      }, 1000);
    } catch (e) {
      console.error('[handleBasicLogin] | %s', e);

      setTimeout(() => {
        enqueueSnackbar(`${e}`, {
          variant: 'error',
        });
      }, 1000);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [navigate, userInfo]);

  const handleEnterLogin = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Enter') {
        return;
      }

      return handleBasicLogin();
    },
    [handleBasicLogin],
  );

  return (
    <div className="p-8">
      {isLoading && <Loading />}
      <div className="flex items-center justify-end text-black-400 text-sm">
        <IconWrapper size={20}>
          <QuestionIcon />
        </IconWrapper>
        <a href="mailto:trngtien.dev@gmail.com" className="ml-2 underline">
          Hỗ trợ
        </a>
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
        onClick={() => {
          enqueueSnackbar('Hiện tại chưa hỗ trợ đăng nhập với Google', {
            variant: 'error',
            anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
            autoHideDuration: 2000,
          });
          // loginGoogle;
        }}
        titleStyles="text-sm font-semibold text-black-200"
        btnStyles="mt-4 border text-gray-400 bg-gray-200 hover:cursor-not-allowed">
        {true ? (
          //TODO: current not implement Login with Google
          <GoogleDisable height={24} width={24} className="mr-2" />
        ) : (
          <IconImage src={GoogleIc} height={24} width={24} styles="mr-2" />
        )}
      </Button>
      <Divider
        textSeparate={true}
        textMid="Hoặc"
        lineStyle="border border-black-300 my-6"
        textStyle="text-black-400 text-sm"
      />
      <form>
        <LabelInput
          title={'Tên đăng nhập'}
          onChange={(e: any) => {
            setUserInfo((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          errorText={
            !userInfo.username && isTriggeredLogin ? 'Thiếu tên đăng nhập' : ''
          }
          name="username"
          required
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
            onKeyDown={handleEnterLogin}
            errorText={
              !userInfo.password && isTriggeredLogin ? 'Thiếu mật khẩu' : ''
            }
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
        onClick={handleBasicLogin}
        btnStyles={'bg-green-300 text-black-100 font-semibold text-sm'}
      />
      <div className={clsx(Styles.FLEX_CENTER, 'mt-2')}>
        <h3 className="text-sm mr-2 text-black-400">Chưa có tài khoản?</h3>
        <h1
          className="font-semibold text-black-900 text-sm my-2"
          onClick={() => navigate(RoutePath.REGISTER)}>
          Đăng kí ngay
        </h1>
      </div>
    </div>
  );
};
export default AuthPage;
