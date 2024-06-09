import { useOnPhone } from '@/hooks';
import { SnackbarOrigin, SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';
import { RoutePath } from './common/constants';
import PrivateRoute from './navigator/PrivateRoute';
import {
  BillPage,
  LoginPage,
  Notification,
  RegisterPage,
  SettingPage,
  WaterMeter,
  WelcomePage,
} from './pages';
import HomePage from './pages/home';
import MessagePage from './pages/message';
import { store } from './redux/store';

const publicRoutes: RouteProps[] = [
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
];

const privateRoutes: RouteProps[] = [
  {
    id: 'home',
    element: <HomePage />,
    path: RoutePath.HOME,
  },
  {
    id: 'bill',
    element: <BillPage />,
    path: RoutePath.BILLING,
  },
  {
    id: 'notification',
    element: <Notification />,
    path: RoutePath.NOTIFICATION,
  },
  {
    id: 'message-mobile',
    element: <MessagePage />,
    path: RoutePath.MESSAGE,
  },
  {
    id: 'setting',
    element: <SettingPage />,
    path: RoutePath.SETTING,
  },
  {
    id: 'water-meter',
    element: <WaterMeter />,
    path: RoutePath.WATER_METER,
  },
];

const getPositionSnackbar = (): SnackbarOrigin => {
  const isMobile = useOnPhone();
  return isMobile
    ? {
        horizontal: 'center',
        vertical: 'bottom',
      }
    : {
        horizontal: 'right',
        vertical: 'top',
      };
};

const App = () => {
  return (
    <SnackbarProvider
      variant="info"
      autoHideDuration={2000}
      anchorOrigin={getPositionSnackbar()}>
      <Provider store={store}>
        <div className="">
          <BrowserRouter>
            <Routes>
              {publicRoutes.map((r) => (
                <Route key={r.id} {...r} />
              ))}

              {privateRoutes.map((r) => {
                const { id, element, ...rest } = r;
                return (
                  <Route
                    key={r.id}
                    {...rest}
                    element={<PrivateRoute>{element}</PrivateRoute>}
                  />
                );
              })}
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </SnackbarProvider>
  );
};

export default App;
