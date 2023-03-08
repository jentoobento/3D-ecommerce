import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const path = "rplayer.gltf"

export const Turntable = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="playergltf">
          <group
            name="record_player_group"
            position={[1.29, 0.92, -2.38]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group
              name="Sony__PS_LX300USB_cover_group01"
              rotation={[-0.86, 0, 0]}
            >
              <mesh
                name="Sony__PS_LX300USB_Glass_poly02"
                castShadow
                receiveShadow
                geometry={nodes.Sony__PS_LX300USB_Glass_poly02.geometry}
                material={materials.Sony__PS_LX300USB_Glass_mat01}
                position={[0.36, 5.3, -18.41]}
              />
              <mesh
                name="Sony__PS_LX300USB_poly04"
                castShadow
                receiveShadow
                geometry={nodes.Sony__PS_LX300USB_poly04.geometry}
                material={materials.Sony__PS_mat01}
                position={[0.02, -7.36, -17.09]}
              />
            </group>
            <group
              name="Sony__PS_LX300USB_head_group01"
              rotation={[0.01, 0, 0]}
            >
              <mesh
                name="Sony__PS_LX300USB_poly03"
                castShadow
                receiveShadow
                geometry={nodes.Sony__PS_LX300USB_poly03.geometry}
                material={materials.Sony__PS_mat01}
                position={[14.54, -3.1, -7.17]}
              />
            </group>
            <mesh
              name="Sony__PS_LX300USB_poly02"
              castShadow
              receiveShadow
              geometry={nodes.Sony__PS_LX300USB_poly02.geometry}
              material={materials.Sony__PS_mat01}
            />
            <mesh
              name="adapter"
              castShadow
              receiveShadow
              geometry={nodes.adapter.geometry}
              material={materials.Sony__PS_mat01}
              position={[-16.39, 13.41, -5.25]}
            />
            <mesh
              name="Sony__PS_LX300USB_poly01"
              castShadow
              receiveShadow
              geometry={nodes.Sony__PS_LX300USB_poly01.geometry}
              material={materials.Sony__PS_mat01}
              position={[-0.11, 1.26, -2.31]}
            />
          </group>
          <group
            name="record_group_001"
            position={[1.73, 0.92, -2.41]}
            rotation={[Math.PI / 2, 0, 0.42]}
            scale={0.01}
          >
            <group name="vinyl_record_group001">
              <mesh
                name="vinyl_record001"
                castShadow
                receiveShadow
                geometry={nodes.vinyl_record001.geometry}
                material={materials.vinyl}
                position={[0, 0, -0.14]}
              />
              <mesh
                name="cover_center001"
                castShadow
                receiveShadow
                geometry={nodes.cover_center001.geometry}
                material={materials.cover}
                position={[0, 0, -0.14]}
              />
            </group>
            <group name="cover001" position={[-1.15, 0, -0.14]}>
              <mesh
                name="Mesh109_1"
                castShadow
                receiveShadow
                geometry={nodes.Mesh109_1.geometry}
                material={materials.edges}
              />
              <mesh
                name="Mesh109"
                castShadow
                receiveShadow
                geometry={nodes.Mesh109.geometry}
                material={materials.cover}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(path);
