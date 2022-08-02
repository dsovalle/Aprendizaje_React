import './App.css';
import {useEffect, useState} from 'react';
import getGifs from './services/getGifs';



function App() {

  const [gifs, setGift] = useState([]);

  useEffect(()=>{
    getGifs().then(gifs => setGift(gifs))
    alert('Me la suda')
      
  }, [])


  return (
    <div className="App">
      <section className="App-content">

        {gifs.map(unGift => <img src={unGift} alt='Gifi'/>)}

       {/* <button onClick={()=>(setGift(DIFERENTE_GIFS))}>Cambiar GUIFS</button> */}

      </section>
    </div>
  );

}

export default App;
