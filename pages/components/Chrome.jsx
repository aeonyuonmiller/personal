import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Chrome(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("uaym.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Light001"
          position={[4.08, 5.9, -1.01]}
          rotation={[1.89, 0.88, -2.05]}
        />
        <group
          name="Camera001"
          position={[-0.02, -0.09, -0.05]}
          rotation={[-2.61, -0.38, 0.21]}
        />
        <group
          name="Light"
          position={[4.08, 5.9, -1.01]}
          rotation={[1.89, 0.88, -2.05]}
        />
        <group
          name="Camera"
          position={[0.55, 0.35, 0.51]}
          rotation={[1.24, 0.33, -0.76]}
        />
        <mesh
          name="Curve"
          geometry={nodes.Curve.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/aym.gltf");

export default Chrome
