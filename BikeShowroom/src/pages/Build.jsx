import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "../components/Model";

export default function Build() {
    return (
        <div className="w-screen h-screen">
            <Canvas>
                {/* <ambientLight intensity={2} /> */}
                <Environment preset="city" background={true} />
                <directionalLight color="white" intensity={1} position={[0, 0, 5]} />
                <Model />
                <OrbitControls></OrbitControls>
            </Canvas>
        </div>
    );
}
