import type { CareerApplicationValues, CareerOption } from './CareerApplicationForm.types';

export const CAREER_SERVICE_OPTIONS: CareerOption[] = [
  { value: 'nettoyage', label: 'Nettoyage du domicile', icon: 'sparkles' },
  { value: 'repassage', label: 'Repassage', icon: 'shirt' },
  { value: 'repas', label: 'Préparation des repas', icon: 'utensils' },
  { value: 'lessive', label: 'Lessive', icon: 'droplets' },
];

export const AVAILABILITY_OPTIONS: CareerOption[] = [
  { value: 'temps-partiel', label: 'Temps partiel' },
  { value: 'temps-plein', label: 'Temps plein' },
  { value: 'flexible', label: 'Horaires flexibles' },
];

export const EXPERIENCE_OPTIONS: CareerOption[] = [
  { value: 'oui', label: 'Oui' },
  { value: 'non', label: 'Non' },
];

export const INITIAL_CAREER_APPLICATION: CareerApplicationValues = {
  fullName: '',
  birthDate: '',
  phone: '',
  email: '',
  address: '',
  locality: '',
  district: '',
  experience: '',
  experienceYears: '',
  services: [],
  availability: '',
  notes: '',
};
