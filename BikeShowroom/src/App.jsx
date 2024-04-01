import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App' >
      <Canvas >
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 3, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls></OrbitControls>
      </Canvas>
    </div>
  )
}

export default App
