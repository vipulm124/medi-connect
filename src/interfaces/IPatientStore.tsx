import Patient from './IPatient';

interface PatientStore {
    patients: Patient[];
    filteredPatients: Patient[];
    filterPatients: (criteria: Partial<Patient>) => void;
    resetFilter: () => void;

}

export default PatientStore;