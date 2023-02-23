import React, { useRef } from "react";
import { Vector3 } from 'three'
import { useGLTF, useAnimations, MeshDistortMaterial } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import dynamic from "next/dynamic";

export function Capsule(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/aym-capsule.gltf");
  const { actions } = useAnimations(animations, group);

  const { viewport } = useThree()
  // viewport = canvas in 3d units (meters)
  const ref = useRef()
  const vec = new Vector3()

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    ref.current.position.set(x/60, y/60, 0)
    ref.current.rotation.set(-y/60, x/60, 0)
  })

  return (
    <group ref={group} {...props} dispose={null}>
        <mesh
          ref={ref}
          name="liquid"
          geometry={nodes.liquid.geometry}
          material={materials.CrackedMetal}
          position={[0, 0, 0]}
          rotation={[0, 0, 50]}
      />
    </group>
  );
}

useGLTF.preload("/aym-capsule.gltf");

// export default Capsule
export default dynamic (() => Promise.resolve(Capsule), {ssr: false})