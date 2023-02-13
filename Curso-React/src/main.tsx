import React from 'react'
import ReactDOM from 'react-dom/client'
import { VarJSX } from './entendendoVariaveisJSX'
import HelloWorld from './components/HelloWorld'
//Importando a função entre parenteses {nome da função}, e de onde ela vem from 'local do arquvio'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <VarJSX />
    <HelloWorld />
  </React.StrictMode>
)

