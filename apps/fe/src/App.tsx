import { useState } from 'react';
import './App.css';
import { Login } from './pages/auth';

const routes = [];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
