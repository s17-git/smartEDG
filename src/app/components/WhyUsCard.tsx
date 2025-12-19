import { WhyUsCardProps } from "../types/types";


const WhyUsCard = ({title, icon, description}: WhyUsCardProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl ${icon.bg} shadow-md`}>
        {icon.icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-900">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600">
       {description}
      </p>
    </div>
  );
};

export default WhyUsCard;
