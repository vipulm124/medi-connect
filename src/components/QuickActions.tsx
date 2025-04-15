import React from "react";
import { BookText, Calendar, UserPlus, NotebookPen } from "lucide-react";


function QuickActions(){
    const quickActions = [
        {
            "id": 1,
            "heading": "New Prescription",
            "icon": BookText,
        },
        {
            "id": 2,
            "heading": "Schedule Appointment",
            "icon": Calendar,
        },
        {
            "id": 3,
            "heading": "Add Patient",
            "icon": UserPlus,
        },
        {
            "id": 4,
            "heading": "My Schedule",
            "icon": NotebookPen,
        }
    ]
    return(
        <div className="px-4 py-2 mb-4" id="el-7ax052fi">

                    
                    <div className="grid grid-cols-2 gap-3" id="el-vqii9v97">
                        {quickActions && quickActions.map((qaction) => (
                            <button key={qaction.id} className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center justify-center" id="el-v42wm0y7">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2" id="el-8ahfi9ts">
                                 {React.createElement(qaction.icon, {
                                          className: "w-6 h-6 text-blue-500 sm:w-8 sm:h-8 md:w-10 md:h-10",
                                        })}
                            </div>
                            <span className="text-gray-800 font-medium" id="el-vtd6yqb1">{qaction.heading}</span>
                        </button>

                        ))}
                        
                    </div>
                </div>
    )
}

export default QuickActions;