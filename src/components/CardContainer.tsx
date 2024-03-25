// CardContainer.tsx
import React from "react";
import Card from "./Card";
import cardConfigs from "./cardConfig";
import { MeshConfig } from "./meshConfigs";

interface CardContainerProps {
  addMesh: (meshConfig: MeshConfig) => void;
  removeMesh: (namePattern: string) => void;
}

const CardContainer: React.FC<CardContainerProps> = ({
  addMesh,
  removeMesh,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cardConfigs.map((config, index) => (
        <Card
          key={index}
          icon={config.icon}
          rarity={config.rarity}
          name={config.name}
          onClick={config.onClickLogic(addMesh, removeMesh)}
          stats={config.stats}
        />
      ))}
    </div>
  );
};

export default CardContainer;
