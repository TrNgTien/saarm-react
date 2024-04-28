import comingSoon from '@/assets/animations/coming-soon.json';
import { LottieAnimation } from '@/components';
import { useNavigate } from 'react-router-dom';

const RegisterLazyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      Register
      <LottieAnimation animationJson={comingSoon} />
    </div>
  );
};
export default RegisterLazyPage;
