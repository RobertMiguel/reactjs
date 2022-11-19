import { useState } from 'react'

export function Car() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("red")
  const [brand, setBrand] = useState("Ford")
  const [model, setModel] = useState("Mustang")
  const [year, setYear] = useState("2000")
  const [colorCar, setColorCar] = useState("black")

  const [car, setCar] = useState({
    brand : "Mercedez",
    model : "Mustang",
    year : "2001",
    colorCar: "Blue"
  })

  const updateColor = ()=>{
    setCar(previousState => {
      return{ ...previousState,colorCar : "Gree" }
    });
  }
  return(
    <>
    <h1>Coisas do meu carro</h1>
    <p>{car.brand}, {car.colorCar},{car.model},{car.year}</p>
    <button
    type='button'
    onClick={updateColor}
    >Update color</button>
    </>
  )
}

export function App() {
  const [colorCar, setCar] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [color,setColor] = useState("red")
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
    type='button'
    onClick={() => setColor("blue")}
    >Blue</button>
    <button
    type='button'
    onClick={()=> setColor("gree")}
    >Gree</button>
    <button
    type='button'
    onClick={()=> setColor("yellow")}
    >yellow</button>
    <p>sobre meu carro, cor dele {colorCar}, modelo {model}, ano do carro {year}</p>
    </>
  )
}