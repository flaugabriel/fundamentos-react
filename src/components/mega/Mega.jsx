import React, {useState} from 'react'
import './Mega.css'

export default (props) => {

  function geraNumeros(qtde) {
    const resultado = []
  
    for (let index = 1; index <= qtde; index++) {
      const numCandidato = parseInt(Math.random() * (60 - 1) + 1)
      if (!resultado.includes(numCandidato)) {
        resultado.push(numCandidato)
      }
    }
  
    return resultado.sort((n1, n2) => n1 - n2)
  }

  const [qtde, setQtde] = useState(props.qtd || 6)
  const numerosIniciais = geraNumeros(qtde)
  const [numeros, setNumeros] = useState(numerosIniciais)

  return (
    <div className="Mega">
      <div>Mega</div>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Qtde de números</label>
        <input 
        min="6"
        max="15"
        type="number"  value={qtde} onChange={(e) => 
        {
          setQtde(+e.target.value)
          setNumeros(geraNumeros(+e.target.value))
        }
      }/>
      </div>
      <button onClick={_ => setNumeros(geraNumeros(qtde))}>Gera números</button>
    </div>
  )
}