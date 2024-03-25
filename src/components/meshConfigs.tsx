interface MaterialProps {
  color: string;
  roughness?: number;
  metalness?: number;
  opacity?: number;
}

interface MeshStandardMaterial {
  type: "meshStandardMaterial";
  props: MaterialProps;
}

interface MeshPhongMaterial {
  type: "meshPhongMaterial";
  props: MaterialProps;
}

interface MeshBasicMaterial {
  type: "meshBasicMaterial";
  props: MaterialProps;
}

interface MeshLambertMaterial {
  type: "meshLambertMaterial";
  props: MaterialProps;
}

interface MeshToonMaterial {
  type: "meshToonMaterial";
  props: MaterialProps;
}

interface MeshPhysicalMaterial {
  type: "meshPhysicalMaterial";
  props: MaterialProps;
}

interface MeshDepthMaterial {
  type: "meshDepthMaterial";
  props: MaterialProps;
}

interface MeshNormalMaterial {
  type: "meshNormalMaterial";
  props: MaterialProps;
}

interface MeshMatcapMaterial {
  type: "meshMatcapMaterial";
  props: MaterialProps;
}

interface MeshDistanceMaterial {
  type: "meshDistanceMaterial";
  props: MaterialProps;
}

interface LineBasicMaterial {
  type: "lineBasicMaterial";
  props: MaterialProps;
}

interface LineDashedMaterial {
  type: "lineDashedMaterial";
  props: MaterialProps;
}

interface PointsMaterial {
  type: "pointsMaterial";
  props: MaterialProps;
}

interface SpriteMaterial {
  type: "spriteMaterial";
  props: MaterialProps;
}

interface ShadowMaterial {
  type: "shadowMaterial";
  props: MaterialProps;
}

type AnyMaterial =
  | MeshStandardMaterial
  | MeshPhongMaterial
  | MeshBasicMaterial
  | MeshLambertMaterial
  | MeshToonMaterial
  | MeshPhysicalMaterial
  | MeshDepthMaterial
  | MeshNormalMaterial
  | MeshMatcapMaterial
  | MeshDistanceMaterial
  | LineBasicMaterial
  | LineDashedMaterial
  | PointsMaterial
  | SpriteMaterial
  | ShadowMaterial;

export interface MeshConfig {
  name: string;
  meshType: "SkinnedMesh" | "Mesh";
  material: AnyMaterial;
  visible: boolean;
}
const meshConfigs: Record<string, MeshConfig> = {
  Body: {
    name: "Body",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#deb887",
        opacity: 1,
      },
    },
  },
  Hair_Base: {
    name: "Hair_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#000000",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Wand_Base: {
    name: "Wand_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#000000",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Buttom_Base: {
    name: "Buttom_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#5f9ea0",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Eyes_Base: {
    name: "Eyes_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Top_Base: {
    name: "Top_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Shoes_Base: {
    name: "Shoes_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Head_Wizard: {
    name: "Head_Wizard",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Head_Barbirain_1: {
    name: "Head_Barbarian_1",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Head_Barbarian_2: {
    name: "Head_Barbarian_2",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Head_Sailor: {
    name: "Head_Sailor",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Head_Samurai: {
    name: "Head_Samurai",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Head_Sultan_1: {
    name: "Head_Sultan_1",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Head_Sultan_2: {
    name: "Head_Sultan_2",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Buttom_Barbarian: {
    name: "Buttom_Barbarian",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Buttom_Samurai: {
    name: "Buttom_Samurai",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Buttom_Sailor_1: {
    name: "Buttom_Sailor_1",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Buttom_Sailor_2: {
    name: "Buttom_Sailor_2",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Buttom_Sultan_1: {
    name: "Buttom_Sultan_1",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Buttom_Sultan_2: {
    name: "Buttom_Sultan_2",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Buttom_Wizard_1: {
    name: "Buttom_Wizard_1",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Buttom_Wizard_2: {
    name: "Buttom_Wizard_2",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Top_Barbarian: {
    name: "Top_Barbarian",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Top_Sailor: {
    name: "Top_Sailor",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Top_Samurai: {
    name: "Top_Samurai",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Top_Sultan: {
    name: "Top_Sultan",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Top_wizard: {
    name: "Top_wizard",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Effect_Halo: {
    name: "Effect_Halo",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Effect_MidasEarings: {
    name: "Effect_MidasEarings",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Effect_MerlinBeard: {
    name: "Effect_MerlinBeard",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Effect_LokiMask_1: {
    name: "Effect_LokiMask_1",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Effect_LokiMask_2: {
    name: "Effect_LokiMask_2",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Effect_Horns: {
    name: "Effect_Horns",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Shoes_Barbarian: {
    name: "Shoes_Barbarian",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Shoes_Wizard: {
    name: "Shoes_Wizard",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Shoes_Sultan: {
    name: "Shoes_Sultan",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Shoes_Samurai: {
    name: "Shoes_Samurai",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Shoes_Sailor: {
    name: "Shoes_Sailor",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Wand_AncientTree: {
    name: "Wand_AncientTree",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Wand_Powerstone_1: {
    name: "Wand_Powerstone_1",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Wand_Powerstone_2: {
    name: "Wand_Powerstone_2",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Wand_Phoenix_1: {
    name: "Wand_Phoenix_1",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Wand_Phoenix_2: {
    name: "Wand_Phoenix_2",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Wand_Crystalgem_1: {
    name: "Wand_Crystalgem_1",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Wand_Crystalgem_2: {
    name: "Wand_Crystalgem_2",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Wand_Crescentshade: {
    name: "Wand_Crescentshade",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Eyes_effect_loki: {
    name: "Eyes_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Eyes_effect_merlin: {
    name: "Eyes_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Eyes_effect_midas: {
    name: "Eyes_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Eyes_effect_demon: {
    name: "Eyes_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
  Eyes_effect_angel: {
    name: "Eyes_Base",
    meshType: "SkinnedMesh",
    visible: true,
    material: {
      type: "meshStandardMaterial",
      props: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: 0.1,
      },
    },
  },
};
export default meshConfigs;
