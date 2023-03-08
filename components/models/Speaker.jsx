import React from "react";
import { useGLTF } from "@react-three/drei";

const path = "speakerLeft.gltf"

export const Speaker = (props) => {
  const { nodes, materials } = useGLTF(path);

  return (
    <group {...props} dispose={null}>
      <group position={[-23.97, 178.18, 0]}>
        <group position={[23.06, -177.95, -3.32]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh106.geometry}
            material={materials.plastik_czerwony}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh106_1.geometry}
            material={materials.chrom}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh106_2.geometry}
            material={materials.plastik_czarny}
          />
        </group>
        <group position={[23.06, -177.89, -2.96]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh108.geometry}
            material={materials.obudowa}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh108_1.geometry}
            material={materials.drewno}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh108_2.geometry}
            material={materials.plastiki}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh108_3.geometry}
            material={materials.tweeter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh108_4.geometry}
            material={materials.membrana}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh108_5.geometry}
            material={materials["srodek glosnika.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh108_6.geometry}
            material={materials.black}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt001.geometry}
          material={materials["srodek glosnika.001"]}
          position={[23.06, -177.95, -3.33]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["srodek glosnika.002"]}
          position={[23.06, -177.96, -3.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.003"]}
          position={[23.06, -177.76, -3.33]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["srodek glosnika.002"]}
          position={[23.2, -178.11, -3]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(path);