import {useState} from "react";
import  usePatientStore  from "../store/PatientStore"
import PatientCard from "../components/PatientCard";
import { Plus, Search } from 'lucide-react';



function Patients(){
  const allPatients = usePatientStore((state) => state.patients);
    const [searchKeyword, setSearchKeyword] = useState("");
  

  const patients = allPatients.filter(
    (patient) =>
      patient.patientName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    patient.age.toString().includes(searchKeyword.toLowerCase())
  );

    return(
<section id="patients" className="page-section min-h-screen bg-white p-6">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Patients</h2>
        <p className="text-gray-600 mt-1">Manage patient records and medical histories</p>
      </div>
      <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200" id="newPatientBtn">
          <Plus className="mr-2"/>
          Add New Patient
        </button>
        <div className="relative">
          <input type="text" placeholder="Search patients..." className="px-4 py-2 w-full sm:w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200" onChange={(event) => setSearchKeyword(event.target.value)}/>
         <Search className="absolute top-2 right-3 text-gray-400"/>
        </div>
      </div>
    </div>


    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Sort by:</span>
          <select className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
            <option>Recently Updated</option>
            <option>Name (A-Z)</option>
            <option>Name (Z-A)</option>
            <option>Last Visit Date</option>
            <option>Upcoming Appointment</option>
          </select>
        </div>
      </div>
    </div>

 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {patients && patients.map((patient) => (

        <PatientCard patientId={patient.patientId}
        patientName={patient.patientName}
        age={patient.age}
        gender={patient.gender}
        phoneNumber={patient.phoneNumber}
        lastVisit={patient.lastVisit}
        nextAppointment={patient.nextAppointment}
        status={patient.status}
        />
      ))}

      

    </div>

    <div className="mt-8 flex items-center justify-between">
      <div className="flex-1 flex justify-between sm:hidden">
        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Previous
        </button>
        <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
        </button>
      </div>
      
    </div>

    
  </div>

  
 
</section>
    )
}

export default Patients;