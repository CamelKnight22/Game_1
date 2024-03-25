// cardConfig.ts
import { IconType } from "react-icons";
import meshConfigs, { MeshConfig } from "./meshConfigs";
import { FaHatWizard } from "react-icons/fa";
import { GiArmoredPants, GiConverseShoe, GiMagicLamp } from "react-icons/gi";
import { VscDebugStart } from "react-icons/vsc";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoShirtSharp } from "react-icons/io5";

interface CardConfig {
  icon: IconType;
  rarity: string;
  name: string;
  stats: string;
  onClickLogic: (
    addMesh: (meshConfig: MeshConfig) => void,
    removeMesh: (namePattern: string) => void
  ) => () => void;
}

const cardConfigs: CardConfig[] = [
  {
    icon: VscDebugStart,
    rarity: "Rare",
    name: "Reset Player",
    stats: "st:+5, int:+6, eff:+5",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Body");
      removeMesh("Hair_Base");
      removeMesh("Buttom");
      removeMesh("Top");
      removeMesh("Effect");
      removeMesh("Head");
      removeMesh("Wand");
      removeMesh("Eyes");
      removeMesh("Shoes");
      addMesh(meshConfigs["Body"]);
      addMesh(meshConfigs["Hair_Base"]);
      addMesh(meshConfigs["Wand_Base"]);
      addMesh(meshConfigs["Buttom_Base"]);
      addMesh(meshConfigs["Top_Base"]);
      addMesh(meshConfigs["Eyes_Base"]);
      addMesh(meshConfigs["Shoes_Base"]);
    },
  },
  {
    icon: FaHatWizard,
    rarity: "Common",
    name: "Wizard Hat",
    stats: "st: +10",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Head");
      addMesh(meshConfigs["Head_Wizard"]);
    },
  },
  {
    icon: FaHatWizard,
    rarity: "Common",
    name: "Barbarian Hat",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Head");
      addMesh(meshConfigs["Head_Barbirain_1"]);
      addMesh(meshConfigs["Head_Barbarian_2"]);
    },
  },
  {
    icon: FaHatWizard,
    rarity: "Common",
    name: "Sailor Hat",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Head");
      addMesh(meshConfigs["Head_Sailor"]);
    },
  },
  {
    icon: FaHatWizard,
    rarity: "Common",
    name: "Samurai Hat",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Head");
      addMesh(meshConfigs["Head_Samurai"]);
    },
  },
  {
    icon: FaHatWizard,
    rarity: "Common",
    name: "Sultan Hat",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Head");
      addMesh(meshConfigs["Head_Sultan_1"]);
      addMesh(meshConfigs["Head_Sultan_2"]);
    },
  },
  {
    icon: GiArmoredPants,
    rarity: "Common",
    name: "Barbarian Pants",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Buttom");
      addMesh(meshConfigs["Buttom_Barbarian"]);
    },
  },
  {
    icon: GiArmoredPants,
    rarity: "Common",
    name: "Samurai Pants",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Buttom");
      addMesh(meshConfigs["Buttom_Samurai"]);
    },
  },
  {
    icon: GiArmoredPants,
    rarity: "Common",
    name: "Sailor Pants",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Buttom");
      addMesh(meshConfigs["Buttom_Sailor_1"]);
      addMesh(meshConfigs["Buttom_Sailor_2"]);
    },
  },
  {
    icon: GiArmoredPants,
    rarity: "Common",
    name: "Sultan Pants",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Buttom");
      addMesh(meshConfigs["Buttom_Sultan_1"]);
      addMesh(meshConfigs["Buttom_Sultan_2"]);
    },
  },
  {
    icon: GiArmoredPants,
    rarity: "Common",
    name: "Wizard Skirt",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Buttom");
      addMesh(meshConfigs["Buttom_Wizard_1"]);
      addMesh(meshConfigs["Buttom_Wizard_2"]);
    },
  },
  {
    icon: IoShirtSharp,
    rarity: "Common",
    name: "Barbarian Shirt",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Top");
      addMesh(meshConfigs["Top_Barbarian"]);
    },
  },
  {
    icon: IoShirtSharp,
    rarity: "Common",
    name: "Wizard Shirt",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Top");
      addMesh(meshConfigs["Top_wizard"]);
    },
  },
  {
    icon: IoShirtSharp,
    rarity: "Common",
    name: "Sailor Shirt",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Top");
      addMesh(meshConfigs["Top_Sailor"]);
    },
  },
  {
    icon: IoShirtSharp,
    rarity: "Common",
    name: "Sultan Shirt",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Top");
      addMesh(meshConfigs["Top_Sultan"]);
    },
  },
  {
    icon: IoShirtSharp,
    rarity: "Common",
    name: "Samurai Shirt",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Top");
      addMesh(meshConfigs["Top_Samurai"]);
    },
  },
  {
    icon: GiMagicLamp,
    rarity: "Common",
    name: "Angel Feather",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Effect");

      addMesh(meshConfigs["Effect_Halo"]);
    },
  },
  {
    icon: GiMagicLamp,
    rarity: "Common",
    name: "Midas Earings",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Effect");

      addMesh(meshConfigs["Effect_MidasEarings"]);
    },
  },
  {
    icon: GiMagicLamp,
    rarity: "Common",
    name: "Merlin's Beard",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Effect");

      addMesh(meshConfigs["Effect_MerlinBeard"]);
    },
  },
  {
    icon: GiMagicLamp,
    rarity: "Common",
    name: "Loki's Mask",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Effect");

      addMesh(meshConfigs["Effect_LokiMask_1"]);
      addMesh(meshConfigs["Effect_LokiMask_2"]);
    },
  },
  {
    icon: GiMagicLamp,
    rarity: "Common",
    name: "Demon's Blood",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Effect");

      addMesh(meshConfigs["Effect_Horns"]);
      addMesh(meshConfigs["Eyes_effect_demon"]);
    },
  },
  {
    icon: GiConverseShoe,
    rarity: "Common",
    name: "Barbarian Shoes",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Shoes");
      addMesh(meshConfigs["Shoes_Barbarian"]);
    },
  },
  {
    icon: GiConverseShoe,
    rarity: "Common",
    name: "Wizrad Shoes",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Shoes");
      addMesh(meshConfigs["Shoes_Wizard"]);
    },
  },
  {
    icon: GiConverseShoe,
    rarity: "Common",
    name: "Sultan Shoes",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Shoes");
      addMesh(meshConfigs["Shoes_Sultan"]);
    },
  },
  {
    icon: GiConverseShoe,
    rarity: "Common",
    name: "Samurai Shoes",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Shoes");
      addMesh(meshConfigs["Shoes_Samurai"]);
    },
  },
  {
    icon: GiConverseShoe,
    rarity: "Common",
    name: "Sailor Shoes",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Shoes");
      addMesh(meshConfigs["Shoes_Sailor"]);
    },
  },
  {
    icon: FaWandMagicSparkles,
    rarity: "Common",
    name: "Ancient Wand",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Wand");
      addMesh(meshConfigs["Wand_AncientTree"]);
    },
  },
  {
    icon: FaWandMagicSparkles,
    rarity: "Common",
    name: "PwrStone Wand",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Wand");
      addMesh(meshConfigs["Wand_Powerstone_1"]);
      addMesh(meshConfigs["Wand_Powerstone_2"]);
    },
  },
  {
    icon: FaWandMagicSparkles,
    rarity: "Common",
    name: "Phoenix Wand",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Wand");
      addMesh(meshConfigs["Wand_Phoenix_1"]);
      addMesh(meshConfigs["Wand_Phoenix_2"]);
    },
  },
  {
    icon: FaWandMagicSparkles,
    rarity: "Common",
    name: "Crstlgem Wand",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Wand");
      addMesh(meshConfigs["Wand_Crystalgem_1"]);
      addMesh(meshConfigs["Wand_Crystalgem_2"]);
    },
  },
  {
    icon: FaWandMagicSparkles,
    rarity: "Common",
    name: "Crescent Wand",
    stats: "st: +11",
    onClickLogic: (addMesh, removeMesh) => () => {
      removeMesh("Wand");
      addMesh(meshConfigs["Wand_Crescentshade"]);
    },
  },
  // Add other card configurations as needed
];

export default cardConfigs;
