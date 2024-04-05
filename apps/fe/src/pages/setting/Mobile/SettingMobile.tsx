import { memo } from 'react';

const SettingMobile = () => {
  return (
    <div className="text-white-10 h-screen">
      <div className="bg-[#0A150F] h-2/5 text-white-10 p-4">SettingMobile</div>
      <div className="h-3/6 text-red-500">Changed</div>
    </div>
  );
};

export default memo(SettingMobile);
