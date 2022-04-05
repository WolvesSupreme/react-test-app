import GlobalStyle from './globalStyles';
import { Navbar} from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/HomePage/Home';
import { Nosotros } from './Pages/NosotrosPage/Nosotros';
import { Servicios } from './Pages/ServiciosPage/Servicios';
import { Paquetes } from './Pages/PaquetesPage/Paquetes';
import { Reservaciones } from './Pages/ReservacionesPage/Reservaciones';
import { Contactenos } from './Pages/ContactenosPage/Contactenos';

// {/*Pages */}


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} > </Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/paquetes" element={<Paquetes />}></Route>
        <Route path="/reservaciones" element={<Reservaciones />}></Route>
        <Route path="/contactenos" element={<Contactenos />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
