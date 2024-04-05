import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';
import { RoutePath } from './common/constants';
import MobileLayout from './components/layout/Mobile/MobileLayout';
import {
  BillPage,
  LoginPage,
  Notification,
  SettingMobile,
  WaterMeter,
} from './pages';
import { HomeMobile } from './pages/home';

const routes: RouteProps[] = [
  {
    id: 'login',
    element: <LoginPage />,
    path: RoutePath.LOGIN,
  },
  {
    id: 'home',
    element: (
      <MobileLayout>
        <HomeMobile />
      </MobileLayout>
    ),
    path: RoutePath.HOME,
  },
  {
    id: 'water-meter',
    element: (
      <MobileLayout>
        <WaterMeter />
      </MobileLayout>
    ),
    path: RoutePath.WATER_METER,
  },
  {
    id: 'bill',
    element: (
      <MobileLayout>
        <BillPage />
      </MobileLayout>
    ),
    path: RoutePath.BILLING,
  },
  {
    id: 'notification',
    element: (
      <MobileLayout>
        <Notification />
      </MobileLayout>
    ),
    path: RoutePath.NOTIFICATION,
  },
  {
    id: 'setting',
    element: (
      <MobileLayout>
        <SettingMobile />
      </MobileLayout>
    ),
    path: RoutePath.SETTING,
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((r) => (
          <Route key={r.id} path={r.path} element={r.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
