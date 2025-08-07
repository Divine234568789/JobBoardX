import {
  TreePine,
  ShoppingBag,
  HardHat,
  GraduationCap,
  Coins,
  Bus,
  Luggage,
  Weight,
} from "lucide-react";

const iconMap = {
  TreePine,
  ShoppingBag,
  HardHat,
  GraduationCap,
  Coins,
  Bus,
  Luggage,
  Weight,
};

export function CatCard({ Icon, Name, Amount }) {
  const IconComponent = iconMap[Icon];

  return (
    <div>
      <div className="rounded-lg p-8 flex flex-col items-center bg-white">
        <IconComponent className="text-blue-400 w-10 h-10 mb-2" />
        <span className="text-lg font-semibold">{Name}</span>
        <span className="text-xs text-blue-500 mb-1 bg-blue-200 rounded-md p-1 w-fit">
          {Amount} jobs
        </span>
      </div>
    </div>
  );
}
