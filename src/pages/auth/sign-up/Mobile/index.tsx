import comingSoon from '@/assets/animations/coming-soon.json';
import { RoutePath } from '@/common/constants';
import { LottieAnimation } from '@/components';
import { Link } from 'react-router-dom';

const RegisterMobile: React.FC = () => {
  return (
    <div className="h-screen text-center">
      <div className="h-[50%] mx-auto mt-[20%]">
        <LottieAnimation animationJson={comingSoon} />
      </div>
      <Link className="text-black" to={RoutePath.LOGIN}>
        &#x2190;Trở lại
      </Link>
    </div>
  );
};
export default RegisterMobile;
