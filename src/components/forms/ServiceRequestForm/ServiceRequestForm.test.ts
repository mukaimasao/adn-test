import { describe, expect, it } from 'vitest';
import { INITIAL_SERVICE_REQUEST } from './ServiceRequestForm.data';
import { validateServiceRequest } from './ServiceRequestForm.validation';

describe('validateServiceRequest', () => {
  it('rejette les champs obligatoires vides avec des messages français', () => {
    expect(validateServiceRequest(INITIAL_SERVICE_REQUEST)).toMatchObject({
      firstName: 'Indiquez votre prénom.',
      lastName: 'Indiquez votre nom de famille.',
      street: 'Indiquez votre rue et numéro.',
      city: 'Indiquez votre ville.',
      postalCode: 'Indiquez votre code postal.',
      email: 'Indiquez votre adresse e-mail.',
      phone: 'Indiquez votre numéro de téléphone.',
      privacyConsent: 'Vous devez accepter la politique de confidentialité.',
    });
  });

  const validValues = {
    ...INITIAL_SERVICE_REQUEST,
    firstName: 'Marie',
    lastName: 'Dupont',
    street: 'Rue de la Paix 12',
    city: 'Bruxelles',
    postalCode: '1000',
    email: 'marie@example.be',
    privacyConsent: true,
  };

  it.each(['+32 486 17 35 77', '0486/17.35.77', '(+32) 486-17-35-77'])(
    'accepte un format téléphonique belge courant : %s',
    (phone) => {
      expect(validateServiceRequest({ ...validValues, phone }).phone).toBeUndefined();
    },
  );

  it('rejette un format téléphonique non plausible', () => {
    expect(validateServiceRequest({ ...validValues, phone: '123' }).phone).toBe(
      'Utilisez un format de téléphone valide.',
    );
  });

  it('exige le consentement à la politique de confidentialité', () => {
    expect(
      validateServiceRequest({ ...validValues, phone: '+32 486 17 35 77', privacyConsent: false }).privacyConsent,
    ).toBe('Vous devez accepter la politique de confidentialité.');
  });

  it('accepte des valeurs valides sans erreur', () => {
    expect(validateServiceRequest({ ...validValues, phone: '+32 486 17 35 77' })).toEqual({});
  });
});
