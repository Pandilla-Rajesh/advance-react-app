import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './style.scss'
import Approutes from './Approutes';

function App() {
  return (
    <div>
        <Outlet/>
        <Approutes/>
    </div>
  );
}

export default App;
