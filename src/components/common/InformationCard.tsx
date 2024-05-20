import { IHistory } from '@/common';
import { Styles } from '@/theme';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { MoneyText } from '../text';

export const InformationCard = (
  props: { imgSrc: string | undefined } & IHistory,
) => {
  const { imgSrc, waterMeter, waterConsume, createdAt } = props;
  const waterMoney = `${3500 * waterConsume}`;
  const timeSubmit = dayjs(createdAt).format('DD-MM-YYYY HH:mm')

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
        <div className={Styles.FLEX_BETWEEN}>
          <h1 className="font-semibold">{`Tháng ${dayjs().month()}/${dayjs().year()}`}</h1>
          <p className="font-normal text-xs">{timeSubmit}</p>
        </div>
        <div>
          <div className={clsx(Styles.FLEX_BETWEEN)}>
            <p className="font-normal mt-2 text-xs">Số nước mới: </p>
            <p className="font-normal mt-2 text-xs">{waterMeter}</p>
          </div>
          <div className={clsx(Styles.FLEX_BETWEEN)}>
            <p className="font-normal mt-2 text-xs">Tiêu thụ:</p>
            <p className="mt-2 text-xs font-bold">{waterConsume}</p>
          </div>
          <div className={clsx(Styles.FLEX_BETWEEN, 'font-semibold italic')}>
            <p className="mt-2 text-xs">Thành tiền: </p>
            <MoneyText styling="mt-2 text-xs" value={waterMoney} />
          </div>
        </div>
      </div>
    </div>
  );
};
