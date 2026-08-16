import { describe, expect, it } from 'vitest';
import { INITIAL_CAREER_APPLICATION } from './CareerApplicationForm.data';
import { validateCareerApplication } from './CareerApplicationForm.validation';

describe('validateCareerApplication', () => {
  it('rejette les champs obligatoires vides avec des messages français', () => {
    expect(validateCareerApplication(INITIAL_CAREER_APPLICATION)).toMatchObject({
      hoursWanted: 'Sélectionnez une option.',
      firstName: 'Indiquez votre prénom.',
      lastName: 'Indiquez votre nom de famille.',
      email: 'Indiquez votre adresse e-mail.',
      street: 'Indiquez votre rue et numéro.',
      city: 'Indiquez votre ville.',
      postalCode: 'Indiquez votre code postal.',
      phone: 'Indiquez votre numéro de téléphone.',
      privacyConsent: 'Vous devez accepter la politique de confidentialité.',
    });
  });

  const validValues = {
    ...INITIAL_CAREER_APPLICATION,
    hoursWanted: '19-25',
    firstName: 'Marie',
    lastName: 'Dupont',
    email: 'marie@example.be',
    street: 'Rue de la Paix 12',
    city: 'Bruxelles',
    postalCode: '1000',
    privacyConsent: true,
  };

  it('accepte les données obligatoires valides', () => {
    expect(validateCareerApplication({ ...validValues, phone: '+32 486 17 35 77' })).toEqual({});
  });

  it('rejette un e-mail et un téléphone non plausibles', () => {
    expect(
      validateCareerApplication({ ...validValues, phone: '123', email: 'marie' }),
    ).toMatchObject({
      phone: 'Utilisez un format de téléphone valide.',
      email: 'Indiquez une adresse e-mail valide.',
    });
  });

  it('exige le consentement à la politique de confidentialité', () => {
    expect(
      validateCareerApplication({ ...validValues, phone: '+32 486 17 35 77', privacyConsent: false }).privacyConsent,
    ).toBe('Vous devez accepter la politique de confidentialité.');
  });
});
