
import './App.css';
import freeCodeLogo from './img/freecodecamp.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {

  const [contador, setNumeClic] = useState(0); 
  const manejarClick = () => 
    setNumeClic(contador + 1);
  const reiniciar = () => 
    setNumeClic(0);
  

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeLogo}
          alt='Logo de freeCodeCamp'
        />
        
      </div>
      <div className='contenedor-principal'>
        <Contador contador={contador}/>
        <Boton 
          texto="Click"
          botonClick={true}
          manejarClick={manejarClick}
          />
        <Boton 
          texto="Reiniciar"
          botonClick={false}
          manejarClick={reiniciar}
        />
      </div>
    </div>
  );
}

export default App;
