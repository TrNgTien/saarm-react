import { cn } from '@/lib/utils';
import { Styles } from '@/theme';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '../common';

const PromptPWA = () => {
  const [isSupportPWA, setIsSupportPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<any>(null);
  const isRemindInstall = localStorage.getItem('isRemindInstall');

  const handler = (e: any) => {
    e.preventDefault();
    setIsSupportPWA(true);
    setPromptInstall(e);
  };

  const onClick = useCallback(
    (evt: any) => {
      evt.preventDefault();

      if (!promptInstall) {
        return;
      }

      promptInstall.prompt();
    },
    [promptInstall],
  );

  const cancel = useCallback(() => {
    setIsSupportPWA(false);
    localStorage.setItem('isRemindInstall', JSON.stringify(false));
  }, []);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('transitionend', handler);
  }, []);

  if (!isSupportPWA || !!isRemindInstall) {
    return null;
  }

  return (
    <div className="fixed z-30 inset-0 bg-gray-500/50 w-full h-full">
      <div className="relative z-100 inset-x-0 bg-white-900 border w-10/12 top-[35%] mx-auto p-6 rounded-xl md:w-[50%]">
        <div className="">
          <div className="text-center p-4">
            <h1 className="text-2xl font-semibold py-4">
              Có thể tải trực tiếp về máy
            </h1>
            <p className="text-sm font-normal text-black-900">
              Bạn có thể tải trực tiếp về máy của mình, hoặc sử dụng trực tiếp
              qua trình duyệt web
            </p>
          </div>
          <div className={cn(Styles.FLEX_BETWEEN, 'mt-2')}>
            <Button
              title={'Không tải'}
              titleStyles=""
              onClick={cancel}
              btnStyles={'text-black-100 font-semibold text-sm m-2'}
            />
            <Button
              title={'Tải về'}
              titleStyles=""
              onClick={(e: any) => onClick(e)}
              btnStyles={'bg-green-300 text-black-100 font-semibold text-sm'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptPWA;
