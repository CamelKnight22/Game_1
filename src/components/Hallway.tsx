import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
  };
  materials: {};
};

export function Hallway(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/hallway.glb") as GLTFResult;
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

useGLTF.preload("/hallway.glb");
