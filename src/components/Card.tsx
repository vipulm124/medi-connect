import React from "react";


interface CardProps {
  heading: string;
  patientCount: number;
  icon: React.ElementType;
}

function Card({ heading, patientCount, icon }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl border-gray-200 p-4 border flex items-center justify-between overflow-hidden max-w-full">
      <div className="flex-1 min-w-0">
        <h2 className="text-[#6b7280] text-base truncate">{heading}</h2>
        <p className="text-[#1f2937] text-xl font-bold">{patientCount}</p>
      </div>
      <div className="flex-shrink-0 ml-4">
        {React.createElement(icon, {
          className: "w-6 h-6 text-blue-500 sm:w-8 sm:h-8 md:w-10 md:h-10",
        })}
      </div>
    </div>
  );
}

export default Card;