// Card.tsx
import { IconType } from "react-icons";
import { useState } from "react";

interface CardProps {
  icon: IconType;
  rarity: string;
  name: string;
  onClick: () => void;
  stats: string;
}

const Card = ({ icon: Icon, rarity, name, onClick, stats }: CardProps) => {
  const [showstats, setShowstats] = useState(false);

  return (
    <div
      className="p-1 w-20 h-24 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 cursor-pointer relative"
      onClick={onClick}
      onMouseEnter={() => setShowstats(true)}
      onMouseLeave={() => setShowstats(false)}
    >
      <div className="flex flex-col justify-between h-full items-center">
        <Icon className="fill-zinc-900" />
        <div className="text-center">
          <h5 className="text-l font-medium text-gray-900">{name}</h5>
          <span className="text-sm text-gray-500">{rarity}</span>
        </div>
      </div>
      {showstats && (
        <div className="absolute -top-10 -left-4 bg-gray-700 text-white text-m rounded p-1 whitespace-nowrap">
          {stats}
        </div>
      )}
    </div>
  );
};

export default Card;
