import React from "react";
import { useGLTF } from "@react-three/drei";

const path = "table.glb"

export const Table = (props) => {
  const { nodes, materials } = useGLTF(path);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.wire_177148027}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.wire_214229166}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.wire_224086086}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.wire_228184153}
      />
    </group>
  );
}

useGLTF.preload(path);