import type { ServiceRequestErrors, ServiceRequestValues } from './ServiceRequestForm.types';

const PHONE_PATTERN = /^(?:\+|\(\+)?[0-9\s()./-]{8,20}$/;

export function validateServiceRequest(values: ServiceRequestValues): ServiceRequestErrors {
  const errors: ServiceRequestErrors = {};

  if (!values.fullName.trim()) errors.fullName = 'Indiquez votre nom complet.';
  if (!values.email.trim()) errors.email = 'Indiquez votre adresse e-mail.';
  else if (!values.email.includes('@')) errors.email = 'Indiquez une adresse e-mail valide.';
  if (!values.phone.trim()) errors.phone = 'Indiquez votre numéro de téléphone.';
  else if (!PHONE_PATTERN.test(values.phone)) {
    errors.phone = 'Utilisez un format de téléphone valide.';
  }
  if (!values.services.length) errors.services = 'Sélectionnez au moins un service.';
  if (values.services.includes('autre') && !values.otherService.trim()) {
    errors.otherService = 'Précisez le service souhaité.';
  }

  return errors;
}
