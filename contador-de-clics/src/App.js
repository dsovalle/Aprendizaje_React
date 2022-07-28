import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import logo from './imagenes/Alpina.png';
//hooks más importantes de React
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img className='logo' src={logo} alt='Logo de Alpina'/>
      </div>

      <div className='contenedor-principal'>

      <Contador numClics ={numClics} />

      <Boton 
        texto='Clic' 
        esBotonDeClic={true} 
        manejarClic={manejarClic} />

      <Boton 
        texto='reiniciar' 
        esBotonDeClic={false} 
        manejarClic={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
