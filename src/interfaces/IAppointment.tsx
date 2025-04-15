interface Appointment {
    id: number, 
    patientName: string;
    appointmentReason:string;
    appointmentDate: string;
    appointmentTime: string;
    duration: string;
    status: string; 
}

export default Appointment;