import { Styles } from '@/theme';
import clsx from 'clsx';
import dayjs from 'dayjs';

export const InformationCard = (props: { imgSrc: string | undefined }) => {
  const { imgSrc } = props;
  return (
    <div
      className={clsx(
        Styles.FLEX_BETWEEN,
        'shadow-md p-4 rounded-lg my-2 border',
      )}>
      <div className="w-3/12">
        <img
          src={imgSrc}
          height={84}
          width={84}
          alt="image-submitted"
          loading="lazy"
        />
      </div>
      <div className="flex-1 px-2">
        <h1 className="font-semibold">{`Tháng ${dayjs().month()}/${dayjs().year()}`}</h1>
        <div>
          <div className={clsx(Styles.FLEX_BETWEEN)}>
            <p className="font-normal mt-2 text-xs">Số nước mới: </p>
            <p className="font-normal mt-2 text-xs">0368249</p>
          </div>
          <div className={clsx(Styles.FLEX_BETWEEN)}>
            <p className="font-normal mt-2 text-xs">Tiêu thụ:</p>
            <p className="mt-2 text-xs font-bold">2</p>
          </div>
          <div className={clsx(Styles.FLEX_BETWEEN, 'font-semibold italic')}>
            <p className="mt-2 text-xs">Thành tiền: </p>
            <p className="mt-2 text-xs">129.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
