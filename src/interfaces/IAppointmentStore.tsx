import Appointment from "./IAppointment";

interface AppointmentStore {
    appointments: Appointment[];
    filteredAppointments: Appointment[];
    filterAppointments: (criteria: Partial<Appointment>) => void;
    resetFilter: () => void;
}

export default AppointmentStore;