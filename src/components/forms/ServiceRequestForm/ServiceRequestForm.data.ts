import type { DayOption, ServiceRequestValues } from './ServiceRequestForm.types';

export const DAY_OPTIONS: DayOption[] = [
  { value: 'lundi', label: 'Lundi' },
  { value: 'mardi', label: 'Mardi' },
  { value: 'mercredi', label: 'Mercredi' },
  { value: 'jeudi', label: 'Jeudi' },
  { value: 'vendredi', label: 'Vendredi' },
  { value: 'samedi', label: 'Samedi' },
];

export const INITIAL_SERVICE_REQUEST: ServiceRequestValues = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  postalCode: '',
  email: '',
  phone: '',
  pluxeeNumber: '',
  hoursWanted: '',
  availableDays: [],
  comment: '',
  privacyConsent: false,
};
