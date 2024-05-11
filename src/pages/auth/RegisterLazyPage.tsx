import comingSoon from '@/assets/animations/coming-soon.json';
import { LottieAnimation } from '@/components';

const RegisterLazyPage: React.FC = () => {
  return (
    <div className="p-4">
      Register
      <LottieAnimation animationJson={comingSoon} />
    </div>
  );
};
export default RegisterLazyPage;
