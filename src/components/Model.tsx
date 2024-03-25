import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useGraph } from "@react-three/fiber";
import { SkeletonUtils } from "three/examples/jsm/Addons.js";
import React from "react";

type GLTFResult = GLTF & {
  nodes: {
    Body: THREE.SkinnedMesh;
    Buttom_Barbarian: THREE.SkinnedMesh;
    Buttom_Base: THREE.SkinnedMesh;
    Buttom_Sailor_1: THREE.SkinnedMesh;
    Buttom_Sailor_2: THREE.SkinnedMesh;
    Buttom_Samurai: THREE.SkinnedMesh;
    Buttom_Sultan_1: THREE.SkinnedMesh;
    Buttom_Sultan_2: THREE.SkinnedMesh;
    Buttom_Wizard_1: THREE.SkinnedMesh;
    Buttom_Wizard_2: THREE.SkinnedMesh;
    Effect_Halo: THREE.SkinnedMesh;
    Effect_Horns: THREE.SkinnedMesh;
    Effect_LokiMask_1: THREE.SkinnedMesh;
    Effect_LokiMask_2: THREE.SkinnedMesh;
    Effect_MerlinBeard: THREE.SkinnedMesh;
    Effect_MidasEarings: THREE.SkinnedMesh;
    Eyes_Base: THREE.SkinnedMesh;
    Hair_Base: THREE.SkinnedMesh;
    Head_Barbarian_1: THREE.SkinnedMesh;
    Head_Barbarian_2: THREE.SkinnedMesh;
    Head_Sailor: THREE.SkinnedMesh;
    Head_Samurai: THREE.SkinnedMesh;
    Head_Sultan_1: THREE.SkinnedMesh;
    Head_Sultan_2: THREE.SkinnedMesh;
    Head_Wizard: THREE.SkinnedMesh;
    Shoes_Barbarian: THREE.SkinnedMesh;
    Shoes_Base: THREE.SkinnedMesh;
    Shoes_Sailor: THREE.SkinnedMesh;
    Shoes_Samurai: THREE.SkinnedMesh;
    Shoes_Sultan: THREE.SkinnedMesh;
    Shoes_Wizard: THREE.SkinnedMesh;
    Top_Barbarian: THREE.SkinnedMesh;
    Top_Base: THREE.SkinnedMesh;
    Top_Sailor: THREE.SkinnedMesh;
    Top_Samurai: THREE.SkinnedMesh;
    Top_Sultan: THREE.SkinnedMesh;
    Top_wizard: THREE.SkinnedMesh;
    Wand_AncientTree: THREE.SkinnedMesh;
    Wand_Base: THREE.SkinnedMesh;
    Wand_Crescentshade: THREE.SkinnedMesh;
    Wand_Crystalgem_1: THREE.SkinnedMesh;
    Wand_Crystalgem_2: THREE.SkinnedMesh;
    Wand_Phoenix_1: THREE.SkinnedMesh;
    Wand_Phoenix_2: THREE.SkinnedMesh;
    Wand_Powerstone_1: THREE.SkinnedMesh;
    Wand_Powerstone_2: THREE.SkinnedMesh;
    rootx: THREE.Bone;
  };
  materials: {};
  animations: GLTFAction[];
};

export type ActionName =
  | "attack_animation_1"
  | "attack_animation_2"
  | "defeat"
  | "idle"
  | "victory";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
export type MaterialOptions =
  | {
      type: "meshStandardMaterial";
      props: THREE.MeshStandardMaterialParameters;
    }
  | {
      type: "meshPhongMaterial";
      props: THREE.MeshPhongMaterialParameters;
    }
  | {
      type: "meshBasicMaterial";
      props: THREE.MeshBasicMaterialParameters;
    }
  | {
      type: "meshLambertMaterial";
      props: THREE.MeshLambertMaterialParameters;
    }
  | {
      type: "meshToonMaterial";
      props: THREE.MeshToonMaterialParameters;
    }
  | {
      type: "meshPhysicalMaterial";
      props: THREE.MeshPhysicalMaterialParameters;
    }
  | {
      type: "meshDepthMaterial";
      props: THREE.MeshDepthMaterialParameters;
    }
  | {
      type: "meshNormalMaterial";
      props: THREE.MeshNormalMaterialParameters;
    }
  | {
      type: "meshMatcapMaterial";
      props: THREE.MeshMatcapMaterialParameters;
    }
  | {
      type: "meshDistanceMaterial";
      props: THREE.MeshDistanceMaterialParameters;
    }
  | {
      type: "lineBasicMaterial";
      props: THREE.LineBasicMaterialParameters;
    }
  | {
      type: "lineDashedMaterial";
      props: THREE.LineDashedMaterialParameters;
    }
  | {
      type: "pointsMaterial";
      props: THREE.PointsMaterialParameters;
    }
  | {
      type: "spriteMaterial";
      props: THREE.SpriteMaterialParameters;
    }
  | {
      type: "shadowMaterial";
      props: THREE.ShadowMaterialParameters;
    }
  | {
      type: "shaderMaterial";
      props: THREE.ShaderMaterialParameters;
    };

export type VisibleMesh = {
  name: string;
  meshType: "SkinnedMesh" | "Mesh";
  material?: MaterialOptions;
  visible?: boolean;
};
export interface AnimationControl {
  mode: "continuous" | "once";
  animation: ActionName;
  animationSpeed?: number;
}

export function Model(
  props: JSX.IntrinsicElements["group"] & {
    animationControl: AnimationControl;
    visibleMeshes: VisibleMesh[];
  }
) {
  const group = useRef<THREE.Group>(null);
  const original = useGLTF("/Wizard_Model.glb") as GLTFResult;
  const graph = useGraph(SkeletonUtils.clone(original.scene));

  const { nodes, animations } = useMemo(() => {
    const { nodes } = graph;
    return { nodes, animations: original.animations };
  }, [graph, original.animations]);

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    switch (props.animationControl.mode) {
      case "continuous":
        playContinuousAnimation(props.animationControl.animation);
        break;
      case "once":
        playAnimationOnce(props.animationControl.animation);
        break;
    }
  }, [props.animationControl, actions]);

  function playContinuousAnimation(animationName: ActionName) {
    if (actions && actions[animationName]) {
      actions[animationName]?.reset().play();
      actions[animationName]?.setEffectiveTimeScale(
        props.animationControl.animationSpeed || 1
      );
    }
  }

  function playAnimationOnce(animationName: ActionName) {
    const animation = actions && actions[animationName];
    if (animation) {
      animation.reset().play();
      animation.clampWhenFinished = true;
      animation.setLoop(THREE.LoopOnce, 0);
      animation.setEffectiveTimeScale(
        props.animationControl.animationSpeed || 1
      );
    }
  }

  const getMaterial = (materialOptions?: MaterialOptions) => {
    if (!materialOptions) return undefined;

    switch (materialOptions.type) {
      case "meshStandardMaterial":
        return new THREE.MeshStandardMaterial(materialOptions.props);
      case "meshPhongMaterial":
        return new THREE.MeshPhongMaterial(materialOptions.props);
      case "meshBasicMaterial":
        return new THREE.MeshBasicMaterial(materialOptions.props);
      case "meshLambertMaterial":
        return new THREE.MeshLambertMaterial(materialOptions.props);
      case "meshToonMaterial":
        return new THREE.MeshToonMaterial(materialOptions.props);
      case "meshPhysicalMaterial":
        return new THREE.MeshPhysicalMaterial(materialOptions.props);
      case "meshDepthMaterial":
        return new THREE.MeshDepthMaterial(materialOptions.props);
      case "meshNormalMaterial":
        return new THREE.MeshNormalMaterial(materialOptions.props);
      case "meshMatcapMaterial":
        return new THREE.MeshMatcapMaterial(materialOptions.props);
      case "meshDistanceMaterial":
        return new THREE.MeshDistanceMaterial(materialOptions.props);
      case "lineBasicMaterial":
        return new THREE.LineBasicMaterial(materialOptions.props);
      case "lineDashedMaterial":
        return new THREE.LineDashedMaterial(materialOptions.props);
      case "pointsMaterial":
        return new THREE.PointsMaterial(materialOptions.props);
      case "spriteMaterial":
        return new THREE.SpriteMaterial(materialOptions.props);
      case "shadowMaterial":
        return new THREE.ShadowMaterial(materialOptions.props);
      case "shaderMaterial":
        return new THREE.ShaderMaterial(materialOptions.props);
      default:
        return undefined;
    }
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="root">
          {props.visibleMeshes.map((meshInfo) => {
            const meshNode = nodes[meshInfo.name];
            if (!meshNode) return null;

            if (meshInfo.visible === false) return null;

            const material = getMaterial(meshInfo.material);

            if (
              meshInfo.meshType === "SkinnedMesh" &&
              meshNode instanceof THREE.SkinnedMesh
            ) {
              return (
                <skinnedMesh
                  key={meshInfo.name}
                  name={meshInfo.name}
                  geometry={meshNode.geometry}
                  skeleton={meshNode.skeleton}
                  material={material}
                ></skinnedMesh>
              );
            } else if (
              meshInfo.meshType === "Mesh" &&
              meshNode instanceof THREE.Mesh
            ) {
              return (
                <mesh
                  key={meshInfo.name}
                  name={meshInfo.name}
                  geometry={meshNode.geometry}
                  material={material}
                ></mesh>
              );
            }

            return null;
          })}
          <primitive object={nodes.rootx} />
        </group>
      </group>
    </group>
  );
}
export const MemoModel = React.memo(Model);
useGLTF.preload("/Wizard_Model.glb");
