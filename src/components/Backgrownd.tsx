import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  );
}