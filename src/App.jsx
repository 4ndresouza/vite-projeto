import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlunosDescrição from './componentes/AlunosDescrição'

function App() {
  const [numeroAlunos,setNumeroAlunos] = useState()
  //const[ menosAluno, NumeroAlunos] = useState(-1)
 // let numerosAlunos = 3

  return (
    <>
    <h2>Angelo Lustosa</h2>
    <p>Professor de FS</p>
    <hr/>

    <h3>Alunos:</h3><span>{numeroAlunos}{menosAlunos} </span>
   <strong>Nome:</strong><span>Rafael</span><br />
   <strong>Idade:</strong><span>16</span> <br />
   <hr />
    <strong>Nome:</strong><span>Andre</span><br />
   <strong>Idade:</strong><span>27</span> <br />
   <hr />
    <strong>Nome:</strong><span>Rodrigo</span><br />
   <strong>Idade:</strong><span>43</span> <br />
   <hr />

   <button onClick={()=>{console.log (setNumeroAlunos(numeroAlunos  +1))}}>+</button>
   <button onClick={()=>{console.long (setNumeroAlunos(numeroAlunos -1))}}>-</button>

    {/* <AlunosDescriçãoescrição
    nome='Rafael'
    idade={16}
    />

    <AlunosDescrição
    nome='Andre'
    idade={27}
    
    /> */}
    
    </>
  )
}

export default App
