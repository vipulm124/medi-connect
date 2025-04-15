import React from "react";
import Card from "../components/Card";
import { Users, Calendar } from "lucide-react"; 
import AppointmentCard from "../components/AppointmentCard";
import QuickActions from "../components/QuickActions";
import  useAppointmentStore  from "../store/AppointmentStore"

function Home() {
  const appointments = useAppointmentStore((state) => state.appointments);
  return (
    <>
      <div>

        <h3
              className="text-lg font-semibold text-gray-800 mt-3 mb-3"
              id="el-sucfb2md"
            >
              Today's Overview
            </h3>
        <div className="grid grid-cols-2 gap-4">
          <Card
            heading="Today's Appointments"
            patientCount={12}
            icon={Calendar}
          />
          <Card heading="Patients Seen" patientCount={8} icon={Users} />
        </div>

        <div className="mt-5">
          <div
            className="flex items-center justify-between mb-4"
            id="el-i3z8tykd"
          >
            <h3
              className="text-lg font-semibold text-gray-800"
              id="el-sucfb2md"
            >
              Upcoming Appointments
            </h3>
            <button
              className="text-blue-600 text-sm font-medium cursor-pointer hover:underline"
              id="el-y69xof97"
              onClick={() => {
              window.location.href = "/appointments";
              }}
            >
              View All
            </button>
          </div>
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
        <div>
          <h3
            className="text-lg font-semibold text-gray-800 mt-5"
            id="el-sucfb2md"
          >
            Quick Actions
          </h3>
          <QuickActions />
        </div>
      </div>
    </>
  );
}

export default Home;
