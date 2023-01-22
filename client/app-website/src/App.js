import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes.tsx';

function App() {
  return (
    <BrowserRouter>
      <header className="fixed">
        <Navbar/>
        
      </header>
      <AppRoutes/>
    </BrowserRouter>
    
  );
}

export default App;
