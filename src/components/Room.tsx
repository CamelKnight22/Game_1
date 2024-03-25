import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
  };
  materials: {};
};

export function Room(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/room.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
      />
    </group>
  );
}

useGLTF.preload("/room.glb");
