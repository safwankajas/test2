import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

function Avatar({ modelFile }) {
  const group = useRef();

  // Load the 3D model based on the provided file name
  const { nodes, materials } = useGLTF(`models/${modelFile}`);

  // Assuming there is a watch animation in watchfbx.fbx
  const { animations: watchAnimation } = useFBX("animations/watchfbx.fbx");
  watchAnimation[0].name = "watch";
  const { actions } = useAnimations(watchAnimation, group);

  useEffect(() => {
    actions["watch"].reset().play();
  }, [actions]);

  return (
    <group ref={group} dispose={null}>
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="Wolf3D_Avatar"
          geometry={nodes.Wolf3D_Avatar.geometry}
          material={materials.Wolf3D_Avatar}
          skeleton={nodes.Wolf3D_Avatar.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

export default Avatar;
