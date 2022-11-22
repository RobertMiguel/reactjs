import React, { useState } from 'react';
import { Card } from '../../components/Card';
import './style.css'

export function Home() {

  const [studentName, setStudentName] = useState()

  return (
    <div className="container">
    <h1>Estudante : {studentName}</h1>
    <input type="text" 
    placeholder="Digite o nome ..."
    onChange={e => setStudentName(e.target.value)}
    />
    <button type="button">Adicionar</button>
    <Card name="robert" time="10:55:25"></Card>
    <Card name="joao" time="11:00:10"></Card>
    </div>

  )
}
