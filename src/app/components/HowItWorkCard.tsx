
import { PropsWithChildren } from "react";
import { HowItWorkProps } from "../types/types";

export const HowItWorkCard = ({
    title,
    icon,
    children
    }: PropsWithChildren<HowItWorkProps>) => {

      const {icon: Icon} = icon;  
      
  return (
    <div className="grow basis-full md:basis-[30%] bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 ${icon.bg}`}>
        <Icon/>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {children}
      </ul>
    </div>
  );
};
