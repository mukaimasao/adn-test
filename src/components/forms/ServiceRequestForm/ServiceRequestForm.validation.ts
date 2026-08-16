import type { ServiceRequestErrors, ServiceRequestValues } from './ServiceRequestForm.types';

const PHONE_PATTERN = /^(?:\+|\(\+)?[0-9\s()./-]{8,20}$/;

export function validateServiceRequest(values: ServiceRequestValues): ServiceRequestErrors {
  const errors: ServiceRequestErrors = {};

  if (!values.firstName.trim()) errors.firstName = 'Indiquez votre prénom.';
  if (!values.lastName.trim()) errors.lastName = 'Indiquez votre nom de famille.';
  if (!values.street.trim()) errors.street = 'Indiquez votre rue et numéro.';
  if (!values.city.trim()) errors.city = 'Indiquez votre ville.';
  if (!values.postalCode.trim()) errors.postalCode = 'Indiquez votre code postal.';
  if (!values.email.trim()) errors.email = 'Indiquez votre adresse e-mail.';
  else if (!values.email.includes('@')) errors.email = 'Indiquez une adresse e-mail valide.';
  if (!values.phone.trim()) errors.phone = 'Indiquez votre numéro de téléphone.';
  else if (!PHONE_PATTERN.test(values.phone)) {
    errors.phone = 'Utilisez un format de téléphone valide.';
  }
  if (!values.privacyConsent) {
    errors.privacyConsent = 'Vous devez accepter la politique de confidentialité.';
  }

  return errors;
}
