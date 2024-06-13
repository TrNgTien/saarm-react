import comingSoon from '@/assets/animations/coming-soon.json';
import { RoutePath } from '@/common/constants';
import { LottieAnimation } from '@/components';
import { Link } from 'react-router-dom';

const RegisterPC = () => {
  return (
    <div className="h-screen text-center">
      <div className="h-[50%] w-[50%] mx-auto mt-[10%]">
        <LottieAnimation animationJson={comingSoon} />
      </div>
      <Link className="text-black" to={RoutePath.LOGIN}>
        &#x2190;Trở lại
      </Link>
    </div>
  );
};

export default RegisterPC;
