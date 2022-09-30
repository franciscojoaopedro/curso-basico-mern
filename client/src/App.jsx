import React from 'react'
import { useState } from 'react'

import Inicio from "./pages/client/painel/index";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <h1>CURSO BÁSICO DE MERN</h1> */}
      <Inicio/>
    </div>
  )
}

export default App
