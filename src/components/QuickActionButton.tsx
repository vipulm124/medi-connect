import React from "react";

interface QuickActionButtonProps {
  icon: React.ElementType;
  heading: string;
}

function QuickActionButton({ icon, heading }: QuickActionButtonProps) {
  return (
    <button className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center justify-center" id="el-2a46iaqo">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-2" id="el-12lkfo18">
                                 {React.createElement(icon, {
                                          className: "w-6 h-6 text-blue-500 sm:w-8 sm:h-8 md:w-10 md:h-10",
                                        })}

                            </div>
                            <span className="text-gray-800 font-medium" id="el-4jquhoox">{heading}</span>
                        </button>
  );
}
export default QuickActionButton;