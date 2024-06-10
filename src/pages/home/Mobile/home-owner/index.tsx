import { Button } from '@/components';
import { cn } from '@/lib/utils';
import { Styles } from '@/theme';
import { memo } from 'react';
import { HomeCard } from './components/HomeCard';

const HomeMobile = () => {
  return (
    <div className="text-white-10 h-screen bg-white-50  m-4">
      <input
        type="text"
        className="border p-4 rounded-lg w-full"
        placeholder="Tìm theo số nhà"
        onChange={() => {}}
      />
      <div className={cn(Styles.FLEX_BETWEEN, 'text-black-900 p-4')}>
        <p className="flex-1">Danh sách nhà</p>
        <Button
          title="Thêm"
          onClick={() => {}}
          btnStyles="bg-green-200 border w-[30%]"
          titleStyles="font-semibold"
        />
      </div>
      <div>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};

export default memo(HomeMobile);
