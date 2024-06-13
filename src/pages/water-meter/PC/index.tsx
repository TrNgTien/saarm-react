import { RoutePath } from '@/common/constants';
import { Styles } from '@/theme';
import { IoIosWarning as Warning } from 'react-icons/io';
import { Link } from 'react-router-dom';

const WaterMeterPc = () => {
  return (
    <div className="text-center h-dvh">
      <div className="w-fit mt-[20%] shadow-md rounded-lg w-fit p-10 mx-auto border">
        <div className={Styles.FLEX_BETWEEN}>
          <Warning size={30} color="#e6e600" />
          <h1>Vui lòng sử dụng điện thoại để chụp ảnh!</h1>
        </div>
        <Link to={RoutePath.HOME}>&#x2190;Trở về trang chủ</Link>
      </div>
    </div>
  );
};

export default WaterMeterPc;
