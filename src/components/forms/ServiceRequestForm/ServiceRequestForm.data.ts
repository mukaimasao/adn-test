import type { ServiceOption, ServiceRequestValues } from './ServiceRequestForm.types';

export const SERVICE_OPTIONS: ServiceOption[] = [
  { value: 'nettoyage', label: 'Nettoyage du domicile', icon: 'shine' },
  { value: 'repassage', label: 'Repassage', icon: 'hanger' },
  { value: 'lessive', label: 'Lessive', icon: 'wash' },
  { value: 'repas', label: 'Préparation des repas', icon: 'pot' },
  { value: 'aide-reguliere', label: 'Aide-ménagère régulière', icon: 'homeCheck' },
  { value: 'autre', label: 'Autre', icon: 'plus' },
];

export const INITIAL_SERVICE_REQUEST: ServiceRequestValues = {
  fullName: '',
  email: '',
  phone: '',
  customerNumber: '',
  locality: '',
  message: '',
  services: [],
  otherService: '',
};
