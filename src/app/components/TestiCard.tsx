import { PropsWithChildren } from "react";
import { TestiCardProps } from "../types/types";

const TestiCard = ({
  name,
  job,
  stars,
  comment,
}: PropsWithChildren<TestiCardProps>) => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{job}</p>
      </div>
      <div className="flex gap-1 mb-4">
        {
          Array.from(
            { length: stars }, (_, index) => (
            <span key={index} className="text-yellow-400 text-lg">★</span>
          ))
        }
      </div>
      <p className="text-sm md:text-base text-gray-700 italic flex-1">
        {comment}
      </p>
    </div>
  );
};

export default TestiCard;
