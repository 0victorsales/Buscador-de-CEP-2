import './styles.css';
import {useState} from 'react';
import api from './api';



function App() {
  
const [input, setInput] = useState('');
const [cep, setCEP] = useState('');

async function handleSearch(){
  if (input === ''){
    alert("Digite um CEP!");
    return;
  }

  try{
    const response = await api.get(`${input}/json`);
    setCEP(response.data);
    setInput("");

  }catch{
    alert("Erro ao buscar CEP");
    setInput("");

  }
}
  
  return (
    <div className="container">
     <h2 className="title">BUSCADOR DE CEP</h2>

      <div className="containerInput" >
        <input
          type="text"
          placeholder="Digite o cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
          <button className="button" onClick={handleSearch}>
            PROCURAR
          </button>
      </div>

      {Object.keys(cep).length > 0  && (

          <main className="main">
          <h2 className="h2"> CEP: { cep.cep}</h2>
          <span className="span">Rua: {cep.logradouro}</span>
          <span className="span">{cep.bairro}</span>
          <span className="span">{cep.localidade} - {cep.uf}</span>

</main>
        
      )}

      
    </div>
    
  );
}

export default App;
