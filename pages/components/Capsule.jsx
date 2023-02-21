import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import dynamic from "next/dynamic";

export function Capsule(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/aym-capsule.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="liquid"
          castShadow
          // receiveShadow
          geometry={nodes.liquid.geometry}
          material={materials.CrackedMetal}
          position={[50, 0, 20]}
          rotation={[0, 0, 50]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/aym-capsule.gltf");

// export default Capsule
export default dynamic (() => Promise.resolve(Capsule), {ssr: false})