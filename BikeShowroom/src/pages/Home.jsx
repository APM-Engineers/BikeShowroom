import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Home() {
  return (
    <div>
        <div className='model' >
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
    </div>

  )
}
