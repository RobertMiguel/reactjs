import { useState } from 'react'

//Export usado para exportar funções
//Para exportar um arquivo todo é usado export default (nom) 


export function VarJSX() {

  let name = "Robert"
  name = name.toUpperCase()
  let newName = name.toLowerCase()

  function sum(a:number, b: number) {
      return a+b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="nomeQualquer">
      <h1>Olá, sou {name}, {newName}</h1>
      <p>Soma {2+2}</p>
      <p>Função de somar {sum(2,1)}</p>
      <img src={url} alt="Random imagem"  />
    </div>
  )
  
}
