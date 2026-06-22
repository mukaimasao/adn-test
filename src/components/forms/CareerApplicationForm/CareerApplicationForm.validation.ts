import type {
  CareerApplicationErrors,
  CareerApplicationValues,
} from './CareerApplicationForm.types';

const PHONE_PATTERN = /^(?:\+|\(\+)?[0-9\s()./-]{8,20}$/;

export function validateCareerApplication(
  values: CareerApplicationValues,
): CareerApplicationErrors {
  const errors: CareerApplicationErrors = {};

  if (!values.fullName.trim()) errors.fullName = 'Indiquez votre nom complet.';
  if (!values.phone.trim()) errors.phone = 'Indiquez votre numéro de téléphone.';
  else if (!PHONE_PATTERN.test(values.phone)) {
    errors.phone = 'Utilisez un format de téléphone valide.';
  }
  if (!values.email.trim()) errors.email = 'Indiquez votre adresse e-mail.';
  else if (!values.email.includes('@')) errors.email = 'Indiquez une adresse e-mail valide.';
  if (!values.experience) errors.experience = 'Sélectionnez une option.';
  if (!values.availability) errors.availability = 'Sélectionnez vos disponibilités.';

  return errors;
}
