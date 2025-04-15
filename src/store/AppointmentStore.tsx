import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import appointmentsData from '../data/appointments.json';
import Appointment from '../interfaces/IAppointment';
import AppointmentStore from '../interfaces/IAppointmentStore';




const useAppointmentStore = create<AppointmentStore>()(
    persist(
        (set) => ({
            appointments: appointmentsData,
            filteredAppointments: appointmentsData,
            filterAppointments: (criteria) => {
                set((state) => ({
                    filteredAppointments: state.appointments.filter((appointment) =>
                        Object.entries(criteria).every(
                            ([key, value]) => appointment[key as keyof Appointment] === value
                        )
                    ),
                }));
            },
            resetFilter: () => {
                set((state) => ({
                    filteredAppointments: state.appointments,
                }));
            },
        }),
        {
            name: 'appointment-store', // name of the storage (localStorage)
        }
    )
);

export default useAppointmentStore;