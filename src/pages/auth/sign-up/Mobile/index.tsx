import comingSoon from '@/assets/animations/coming-soon.json';
import { LottieAnimation } from '@/components';
import MobileLayout from '@/components/layout/Mobile/MobileLayout';

const RegisterMobile: React.FC = () => {
  return (
    <MobileLayout>
      <div className="text-white-10 h-full bg-white-50">
        <div className="h-full border rounded-lg">
          <LottieAnimation animationJson={comingSoon} />
        </div>
      </div>
    </MobileLayout>
  );
};
export default RegisterMobile;
