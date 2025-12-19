import { TQuestion } from "@/app/types/types";
import { useState } from "react";

const FaqItem = ({
  question,
  answer,
}: TQuestion) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-green-300 hover:shadow-md transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 text-base md:text-lg">
          {question}
        </span>
        <span
          className={`text-green-600 text-2xl transform transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div className="px-6 py-5 bg-gray-50 border-t-2 border-gray-100 text-gray-700 leading-relaxed space-y-4">
          <p>{answer}</p>
          <button className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors">
            <span>📱</span> Demander plus d'infos à EVA
          </button>
        </div>
      )}
    </div>
  );
};

export default FaqItem;