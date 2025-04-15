import React from "react";
import Patient from "../interfaces/IPatient";
import { Calendar, User } from 'lucide-react';

function get_status_color(status: string) {
    switch (status) {
        case "Cancelled":
            return "bg-red-100 text-red-800";
        case "Urgent":
                return "bg-red-100 text-red-800";
        case "Confirmed":
            return "bg-green-100 text-green-800";
        case  "Follow-up":
            return "bg-yellow-100 text-yellow-800";
        case "Pending":
                return "bg-yellow-100 text-yellow-800";
        case "New":
                return "bg-blue-100 text-blue-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
}

function get_gender_pic(gender: string) {
    if (gender.toLowerCase() == "male"){
        return "https://avatar.iran.liara.run/public/boy"
    }
    else{
        return "https://avatar.iran.liara.run/public/girl"
    }
}



function PatientCard({patientId, patientName, age, gender, phoneNumber, lastVisit, nextAppointment, status } :Patient){
    return(
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="p-5">
          <div className="flex items-start mb-4">
            <img src={get_gender_pic(gender)} alt="Patient avatar" className="w-16 h-16 rounded-full mr-4 object-cover" onerror="this.onerror=null; this.src='https://placehold.co/64x64?text=Patient'"/>
            <div className="flex-1">
              <h3 className="font-medium text-lg text-gray-900">{patientName}</h3>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {age} years
                </span>
                <span className="mx-2">•</span>
                <span>{gender}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-1">
               <User className="h-4 w-4 mr-1" />
                Patient ID: {patientId}
              </div>
            </div>

          </div>
          <div className="border-t border-gray-100 pt-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm font-medium">{phoneNumber}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Last Visit</p>
                <p className="text-sm font-medium">{lastVisit}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Next Appointment</p>
                <p className="text-sm font-medium text-blue-600">{nextAppointment}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Status</p>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 ${get_status_color(status)}`}>
                  {status}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3 flex justify-between border-t border-gray-200">
          <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">View Records</button>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">Schedule</button>
        </div>
      </div>

    );
}


export default PatientCard;