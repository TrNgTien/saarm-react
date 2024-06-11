import Apartment from '@/assets/icons/apartment-placeholder.svg';
import { IApartmentRoom } from '@/common';
import { RoutePath } from '@/common/constants';
import { MoneyText } from '@/components';
import { cn } from '@/lib/utils';
import { Styles } from '@/theme';
import { MdPeopleAlt as PeopleIcon } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const RoomCard = (props: IApartmentRoom) => {
  const { id, roomName, roomPrice, maxPeople, currentPeople } = props;
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        Styles.FLEX_BETWEEN,
        'border shadow-md mb-4 rounded-lg p-4 text-black-500',
      )}
      onClick={() =>
        navigate(`${RoutePath.ROOM}/${id}`, { state: { name: roomName } })
      }>
      <div className="h-[80px] bg-gray-300 rounded-lg">
        <img
          src={Apartment}
          height={80}
          width={80}
          alt="apartment"
          loading="lazy"
        />
      </div>
      <div className={'flex-1 ml-2'}>
        <p>{roomName}</p>
        <MoneyText styling="" value={`${roomPrice}`} />
        <div className={cn(Styles.FLEX_ALIGN_CENTER)}>
          <PeopleIcon />
          <p>
            Số nhân khẩu: {currentPeople}/{maxPeople}
          </p>
        </div>
      </div>
    </div>
  );
};
