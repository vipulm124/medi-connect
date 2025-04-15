import React, {useState} from "react";
import AppointmentCard from "../components/AppointmentCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronLeft, ChevronRight, Plus, Search } from 'lucide-react';
import moment from 'moment';
import  useAppointmentStore  from "../store/AppointmentStore"



function addsubstractDays(date: Date, days: number) {
    return moment(date)
        .add(days, 'days')
        .toDate();
}

function AppointmentPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [searchKeyword, setSearchKeyword] = useState("");
  const allAppointments = useAppointmentStore((state) => state.appointments);

  const appointments = allAppointments.filter(
    (appointment) =>
      moment(appointment.appointmentDate).isSame(moment(startDate), 'day') && (appointment.patientName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      appointment.appointmentReason.toLowerCase().includes(searchKeyword.toLowerCase()))
  );


  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Appointments</h2>
          <p className="text-gray-600 mt-1">
            Manage your upcoming and past appointments
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
          <button
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            id="newAppointmentBtn"
          >
            <Plus className="mr-2"/>
            New Appointment

          </button>
          <div className="relative">
            <input type="text" placeholder="Search appointments..." className="px-4 py-2 w-full sm:w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" onChange={(event) => setSearchKeyword(event.target.value)}/>
            <Search className="absolute top-2 right-3 text-gray-400"/>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <ChevronLeft onClick={() => setStartDate(addsubstractDays(startDate, -1))}/>
          </button>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  dateFormat="MMMM d, yyyy" className="justify-items-center"/>
          <button className="p-1 rounded-full hover:bg-gray-100">
          <ChevronRight  onClick={() => setStartDate(addsubstractDays(startDate, 1))}/>
          </button>
        </div>

      </div>


      <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
        {appointments &&
          appointments.map((appointment) => (
            <AppointmentCard
              id={appointment.id}
              patientName={appointment.patientName}
              appointmentReason={appointment.appointmentReason}
              appointmentDate={appointment.appointmentDate}
              appointmentTime={appointment.appointmentTime}
              duration={appointment.duration}
              status={appointment.status}
            />
          ))}
      </div>
    </div>
  );
}

export default AppointmentPage;
