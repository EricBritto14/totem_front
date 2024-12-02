import {Routes, Router, useLocation, Route} from "react-router-dom";
import Inicio from './Pages/Inicio/Inicio';
import Header from "./Components/Header/Header";
import './index.css'
import Filas from "./Pages/Filas/Filas";
import Usuarios from "./Pages/Usuarios/Usuarios";
import Publicidade from "./Pages/Publicidade/Publicidade";

const App = () => {
  return (
        <Routes>
            <Route path='/inicio' element={<Inicio/>} />
            <Route path="/filas" element={<Filas/>} />
            <Route path="/usuarios" element={<Usuarios/>} />
            <Route path="/publicidade" element={<Publicidade/>} />
        </Routes>
        
  );
}

export default App