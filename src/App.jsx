import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Componente from './components/Componente';

function App() {
  const [texto, definirTexto] = useState("");
  const [contador, definirContador] = useState(0);

  return (
    <>
      <div className='container'>
        <input
          type="text"
          value={texto}
          placeholder='Digite algo'
          onChange={(event) => definirTexto(event.target.value)}
        />
        <button onClick={() => definirContador(contador + 1)}>
          Clique para aumentar o contador
        </button>
        <p>Texto: {texto}</p>
        <p>Contador: {contador}</p>
        <p>Componente: <Componente /></p>
      </div>
    </>
  )
}

export default App
