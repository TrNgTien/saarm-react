import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';
import MobileLayout from './components/layout/Mobile/MobileLayout';
import { Login } from './pages/auth';
import Home from './pages/home/Mobile';

const routes: RouteProps[] = [
  {
    id: 'login',
    element: <Login />,
    path: '/login',
  },
  {
    id: '',
    element: (
      <MobileLayout>
        <Home />
      </MobileLayout>
    ),
    path: '/',
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
