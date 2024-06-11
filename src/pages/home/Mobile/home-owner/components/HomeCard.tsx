import Apartment from '@/assets/icons/apartment-placeholder.svg';
import { IApartment } from '@/common';
import { RoutePath } from '@/common/constants';
import { cn } from '@/lib/utils';
import { Styles } from '@/theme';
import { RiDoorOpenFill as RoomIcon } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export const HomeCard = (props: IApartment) => {
  const { name, address, totalRoom, roomAvailable, id } = props;
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        Styles.FLEX_BETWEEN,
        'border shadow-md mb-4 rounded-lg p-4 text-black-500',
      )}
      onClick={() => navigate(`${RoutePath.APARTMENT}/${id}`)}>
      <div className="rounded-lg">
        <img src={Apartment} />
      </div>
      <div className={'flex-1 ml-2'}>
        <p>{name}</p>
        <p className="text-sm">{address}</p>
        <div className={cn(Styles.FLEX_ALIGN_CENTER)}>
          <RoomIcon />
          <p>
            Phòng trống: {roomAvailable}/{totalRoom}
          </p>
        </div>
      </div>
    </div>
  );
};
