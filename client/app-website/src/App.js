import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes.tsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas)

function App() {
  return (
      <BrowserRouter>
        <header className="fixed z-50">
          <Navbar/>
          
        </header>
        <AppRoutes/>
      </BrowserRouter>
  );
}

export default App;
