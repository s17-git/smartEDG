import { CardProps } from "../types/types";

export const Card = ({
    title,
    flash,
    icon,
    }: CardProps) => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-yellow-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col space-y-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl 
        ${icon.bg}`}>
        {icon.icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-900">
        {title}
      </h3>
      <div className={`inline-flex items-center w-fit px-4 py-2 rounded-full text-sm md:text-xs font-semibold ${flash.bg}`}>
        <span className="mr-2">{flash.icon}</span>{flash.text}
      </div>
    </div>
  );
};
