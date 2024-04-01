import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App' >
    <Navbar></Navbar>
    <Home></Home>
    </div>
  )
}

export default App
