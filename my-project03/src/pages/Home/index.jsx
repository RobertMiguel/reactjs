import { Card } from '../../components/Card';
import './style.css'

export function Home() {

  return (
    <div className="container">
    <h1>Lista de Prenseça</h1>
    <input type="text" placeholder="Digite o nome ..."/>
    <button type="button">Adicionar</button>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </div>
  )
}