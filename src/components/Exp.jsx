import { OrbitControls, Preload } from "@react-three/drei";
import { Avatar } from "../components";

function Exp({ isMobile }) {
  console.log("isMobile:", isMobile);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <group
        scale={isMobile ? 4 : 4}
        position-y={isMobile ? -6.6 : -4.3}
        rotation-y={0}
      >
        <spotLight
          position={[5, 50, 50]}
          angle={120}
          penumbra={10}
          intensity={0.1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={2.5} />
        <Avatar />
        <ambientLight intensity={0.5} />
      </group>
      <Preload all />
    </>
  );
}

export default Exp;
