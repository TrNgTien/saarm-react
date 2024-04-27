import { Provider } from 'react-redux';
import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';
import { RoutePath } from './common/constants';
import MobileLayout from './components/layout/Mobile/MobileLayout';
import {
  BillPage,
  LoginPage,
  Notification,
  RegisterPage,
  SettingMobile,
  WaterMeter,
  WelcomePage,
} from './pages';
import { HomeMobile } from './pages/home';
import MessagePage from './pages/message/MessagePage';
import { store } from './redux/store';

const routes: RouteProps[] = [
  {
    id: 'welcome',
    element: <WelcomePage />,
    path: RoutePath.WELCOME,
    index: true,
  },
  {
    id: 'login',
    element: <LoginPage />,
    path: RoutePath.LOGIN,
  },
  {
    id: 'register',
    element: <RegisterPage />,
    path: RoutePath.REGISTER,
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
    element: <WaterMeter />,

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
    id: 'message-mobile',
    element: (
      <MobileLayout>
        <MessagePage />
      </MobileLayout>
    ),
    path: RoutePath.MESSAGE,
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
    <Provider store={store}>
      <div className="h-screen bg-[#FBFBFB]">
        <BrowserRouter>
          <Routes>
            {routes.map((r) => (
              <Route key={r.id} {...r} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
