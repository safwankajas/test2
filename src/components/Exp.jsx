import React, { useEffect, useRef, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Avatar } from "../components";
import "./Abc.css"; // Import your CSS file for styling

function Exp({ isMobile }) {
  const [currentModel, setCurrentModel] = useState("a.glb");
  const [nextModel, setNextModel] = useState("b.glb");
  const avatarGroup = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const modelNames = ["a.glb", "b.glb", "c.glb", "d.glb"];
      const currentIndex = modelNames.indexOf(currentModel);
      const nextIndex = (currentIndex + 1) % modelNames.length;
      const nextModel = modelNames[nextIndex];

      setNextModel(nextModel);

      // After 15 seconds, fade out the current model
      setTimeout(() => {
        avatarGroup.current.style.opacity = 0;
      }, 3500); // 15000 milliseconds = 15 seconds

      // After 20 seconds, update to the next model and fade in
      setTimeout(() => {
        setCurrentModel(nextModel);
        avatarGroup.current.style.opacity = 1;
      }, 8000); // 20000 milliseconds = 20 seconds
    }, 10000); // 30000 milliseconds = 30 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentModel]);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Preload
        autoResolve
        items={[`models/${currentModel}`, `models/${nextModel}`]}
        onResolve={() => {
          // When the models are preloaded, force re-render by updating state
          setCurrentModel(currentModel);
        }}
      />
      <group
        scale={isMobile ? 4 : 4.5}
        position-y={isMobile ? -6.5 : -4.3}
        ref={avatarGroup}
        className="fade-effect" // Apply fade effect styling
      >
        <spotLight
          position={[5, 50, 50]}
          angle={0.12}
          penumbra={10}
          intensity={0.1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={2.5} />
        {currentModel && (
          <Avatar
            modelFile={currentModel}
            key={currentModel} // Ensure the Avatar component reloads when the model changes
          />
        )}
        <ambientLight intensity={0.5} />
      </group>
    </>
  );
}

export default Exp;
