import React from "react";
import { useGLTF } from "@react-three/drei";

const path = "counter.gltf"

export const Counter = (props) => {
  const { nodes, materials } = useGLTF(path);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.12}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.lambert1}
        />
      </group>
    </group>
  );
}

useGLTF.preload(path);