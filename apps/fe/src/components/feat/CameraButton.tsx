import { Color } from '@/theme';
import { IoCameraOutline as Camera } from 'react-icons/io5';
import { IconWrapper } from '../common';

export const CameraButton = () => {
  return (
    <div className="rounded-full bg-black-900 p-6 absolute xs:p-4 top-[-2rem] border-4 border-t- border-white-20">
      <IconWrapper size={24} color={Color.MAIN_WHITE}>
        <Camera />
      </IconWrapper>
    </div>
  );
};
