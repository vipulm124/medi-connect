import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import patientsData from '../data/patients.json'; 
import Patient from '../interfaces/IPatient';
import PatientStore from '../interfaces/IPatientStore';




const usePatientStore = create<PatientStore>()(
    persist(
        (set) => ({
            patients: patientsData,
            filteredPatients: patientsData,
            filterPatients: (criteria) => {
                set((state) => ({
                    filteredPatients: state.patients.filter((patient) =>
                        Object.entries(criteria).every(
                            ([key, value]) => patient[key as keyof Patient] === value
                        )
                    ),
                }));
            },
            resetFilter: () => {
                set((state) => ({
                    filteredPatients: state.patients,
                }));
            },
        }),
        {
            name: 'patient-store', // name of the storage (localStorage)
        }
    )
);

export default usePatientStore;