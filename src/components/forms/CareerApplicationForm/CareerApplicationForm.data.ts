import type { CareerApplicationValues, CareerOption } from './CareerApplicationForm.types';

export const HOURS_OPTIONS: CareerOption[] = [
  { value: 'moins-19', label: 'moins de 19h' },
  { value: '19-25', label: 'entre 19h et 25h' },
  { value: '26-32', label: 'entre 26h et 32h' },
  { value: 'plus-32', label: 'plus que 32h' },
];

export const INITIAL_CAREER_APPLICATION: CareerApplicationValues = {
  hoursWanted: '',
  firstName: '',
  lastName: '',
  email: '',
  street: '',
  city: '',
  postalCode: '',
  phone: '',
  privacyConsent: false,
};
