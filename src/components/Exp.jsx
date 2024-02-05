import React, { useEffect, useState } from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import { Avatar } from "../components";
import "./Abc.css"; // Import your CSS file for styling

function Exp({ isMobile }) {
  const getCurrentModel = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    // Divide 24 hours into 9 intervals (0-2.67, 2.67-5.33, ..., 21.33-24)
    const intervalLength = 24 / 9;
    const intervalIndex = Math.floor(currentHour / intervalLength);

    // Map each interval to a model
    const modelNames = ["a.glb", "b.glb", "c.glb", "d.glb", "e.glb", "f.glb", "g.glb", "h.glb", "i.glb"];
    return modelNames[intervalIndex];
  };

  const [currentModel, setCurrentModel] = useState(getCurrentModel);

  useEffect(() => {
    const updateModelBasedOnTime = () => {
      setCurrentModel(getCurrentModel());
    };

    const interval = setInterval(updateModelBasedOnTime, 60000); // Check every minute
    updateModelBasedOnTime(); // Check immediately when the component mounts

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Preload autoResolve items={[`models/${currentModel}`]} />
      <group scale={isMobile ? 4 : 4.5} position-y={isMobile ? -6.5 : -4.3}>
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
