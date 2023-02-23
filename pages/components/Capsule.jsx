import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import dynamic from "next/dynamic";

export function Capsule(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/aym-capsule.gltf");
  const { actions } = useAnimations(animations, group);
  
  // map 3d-model to mouse-position
  // const meshRef = useRef();

  // useFrame(({ mouse }) => {
  //   meshRef.current.position.x = mouse.x * 10;
  //   meshRef.current.position.y = -mouse.y * 10;
  // });

    const { viewport } = useThree()
  // viewport = canvas in 3d units (meters)
  const ref = useRef()

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    ref.current.position.set(x/50, y/50, 0)
    ref.current.rotation.set(-y/50, x/50, 0)
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          ref={ref}
          name="liquid"
          castShadow
          receiveShadow
          geometry={nodes.liquid.geometry}
          material={materials.CrackedMetal}
          position={[0, 0, 0]}
          rotation={[0, 0, 50]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/aym-capsule.gltf");

// export default Capsule
export default dynamic (() => Promise.resolve(Capsule), {ssr: false})