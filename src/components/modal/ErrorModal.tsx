import ErrorMobile from '@/assets/icons/error-mobile.svg';
import { cn } from '@/lib/utils';
import { Styles } from '@/theme';
import { Button } from '../common';

export const ErrorModal = (props: { onClick: () => void }) => {
  const { onClick } = props ?? {};
  return (
    <div className="fixed z-30 inset-0 bg-gray-500/50 w-full h-full">
      <div className="relative z-100 inset-x-0 bg-white-900 border w-10/12 top-[35%] mx-auto p-6 rounded-xl">
        <div className="w-fit mx-auto -mt-28 bg-transparent">
          <img alt="err" src={ErrorMobile} />
        </div>
        <div className="">
          <div className="text-center p-4">
            <h1 className="text-2xl font-semibold py-4">Đã có lỗi xảy ra</h1>
            <p className="text-sm font-normal text-black-900">
              Chúng tôi không thể nhận dạng được số nước từ ảnh chụp. Vui lòng
              chụp lại hoặc chọn ảnh khác.
            </p>
          </div>
          <div className={cn(Styles.FLEX_BETWEEN, 'mt-2')}>
            <Button
              title={'Chụp lại'}
              titleStyles=""
              onClick={onClick}
              btnStyles={'bg-green-300 text-black-100 font-semibold text-sm'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
