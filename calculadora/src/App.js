import './App.css';
import logo from './imagenes/Alpina.png';
import Boton from './componentes/boton';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={logo} className='logo' alt='Logo de Alpin' />
      </div>
      <div className='contenedor-principal'>
      <div className='fila'>
        <Boton>1</Boton>
        <Boton>+</Boton> 
      </div>
      <div className='fila'>
      </div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
