import { Banner } from '@/components';

const Home = () => {
  return (
    <div className="text-white-10 h-screen">
      <div className="bg-[#0A150F] h-2/5 text-white-10 p-4">
        <Banner />
      </div>
      <div className="h-3/6 text-red-500">Tien ich</div>
    </div>
  );
};

export default Home;
