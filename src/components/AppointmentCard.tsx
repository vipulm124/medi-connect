import React from "react";
import Appointment from "../interfaces/IAppointment";


function get_status_color(status: string) {
    switch (status) {
        case "Cancelled":
            return "bg-red-100 text-red-800";
        case "Confirmed":
            return "bg-green-100 text-green-800";
        case "Pending":
            return "bg-yellow-100 text-yellow-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
}

function AppointmentCard({id, patientName, appointmentReason, appointmentTime, duration, status}: Appointment) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200" key={id}>

        <div className="p-4 hover:bg-gray-50 transition-colors duration-150">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
              <div className="bg-blue-100 text-blue-800 font-semibold rounded-lg py-2 px-3 text-center w-24">
                <div className="text-sm">{appointmentTime}</div>
                <div className="text-xs">{duration}</div>
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{patientName}</h4>
                  <p className="text-sm text-gray-600">{appointmentReason}</p>
                </div>
                <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${get_status_color(status)}`}>
                    {status}
                  </span>

                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="text-sm px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Details
                </button>
                <button className="text-sm px-3 py-1 bg-blue-50 border border-blue-200 rounded-md text-blue-700 hover:bg-blue-100">
                  Reschedule
                </button>
                <button className="text-sm px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button className="text-sm px-3 py-1 bg-blue-600 rounded-md text-white hover:bg-blue-700">
                  Begin Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default AppointmentCard;