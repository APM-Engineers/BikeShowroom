import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "../components/Model";

export default function Build() {
    return (
        <div className="w-screen h-screen">
            <Canvas>
                {/* Ambient light */}
                <ambientLight intensity={0.5} />

                {/* Directional light */}
                <directionalLight color="white" intensity={0.5} position={[0, 0, 5]} />

                    <Model scale={0.4} />
                    <OrbitControls></OrbitControls>
               
            </Canvas>
        </div>
    );
}
