//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Footer from "./Component/Footer/Footer";
import Contacto from "./Component/Formularios/Form";
import Login from "./Component/Formularios/Login";
import Navbar from "./Component/Navbar/Navbar";
import Servicio from "./Component/Servicios/Servicios";
import Quienes_somos from "./Component/Somos/Somos";
import Clients from "./Component/cliente/Clients";
import Espacio from "./Component/cliente/Espacio";
import Home from "./View/Home/Home";
function App() {
  // const [count, setCount] = useState(true)

  return (
    <>
      <Navbar />
      <Home />
      <Clients />
      <Quienes_somos />
      <Servicio />
      <Contacto />
<Espacio />
      <Login />
      <Footer />
    </>
  );
}

export default App;
