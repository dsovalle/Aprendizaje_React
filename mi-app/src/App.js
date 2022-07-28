import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre nuestros cursos</h1>
        <Testimonio
          nombre='Pepito Perez'
          pais='EstadosUnidos'
          imagen='logo-coca'
          alt='Coca-Cola'
          cargo='Asesor'
          empresa='CocaCola Company'
          testimonio='Coca-Cola es una bebida azucarada gaseosa vendida a nivel mundial en tiendas, restaurantes y máquinas expendedoras en más de doscientos países o territorios. Es el principal producto de The Coca-Cola Company, de origen estadounidense.' />

        <Testimonio
          nombre='Carlos Perez'
          pais='EstadosUnidos'
          imagen='Pepsi'
          alt='Pepsi'
          cargo='Ingeniero de Software'
          empresa='Pepsi'
          testimonio='Pepsi, es una bebida azucarada y gaseosa de cola creada en los Estados Unidos y producida por la compañía PepsiCo. Su mayor competidora es la también estadounidense Coca-Cola' />

        <Testimonio
          nombre='Daniel T'
          pais='Colombia'
          imagen='Alpina'
          alt='Alpina'
          cargo='Ingeniero de Sistemas'
          empresa='Alpina'
          testimonio='Fundada en el año 2008, tiene el propósito de contribuir a mejorar la Seguridad Alimentaria y Nutricional de las poblaciones, en especial de la primera infancia, generando y transfiriendo conocimiento.'/>
      </div>
    </div>
  );
}

export default App;
