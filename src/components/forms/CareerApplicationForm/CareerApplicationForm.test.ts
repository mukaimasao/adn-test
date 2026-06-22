import { describe, expect, it } from 'vitest';
import { INITIAL_CAREER_APPLICATION } from './CareerApplicationForm.data';
import { validateCareerApplication } from './CareerApplicationForm.validation';

describe('validateCareerApplication', () => {
  it('rejette les champs obligatoires vides avec des messages français', () => {
    expect(validateCareerApplication(INITIAL_CAREER_APPLICATION)).toMatchObject({
      fullName: 'Indiquez votre nom complet.',
      phone: 'Indiquez votre numéro de téléphone.',
      email: 'Indiquez votre adresse e-mail.',
      experience: 'Sélectionnez une option.',
      availability: 'Sélectionnez vos disponibilités.',
    });
  });

  it('accepte les données obligatoires valides', () => {
    const values = {
      ...INITIAL_CAREER_APPLICATION,
      fullName: 'Marie Dupont',
      phone: '+32 486 17 35 77',
      email: 'marie@example.be',
      experience: 'oui',
      availability: 'temps-partiel',
    };

    expect(validateCareerApplication(values)).toEqual({});
  });

  it('rejette un e-mail et un téléphone non plausibles', () => {
    const values = {
      ...INITIAL_CAREER_APPLICATION,
      fullName: 'Marie Dupont',
      phone: '123',
      email: 'marie',
      experience: 'non',
      availability: 'temps-plein',
    };

    expect(validateCareerApplication(values)).toMatchObject({
      phone: 'Utilisez un format de téléphone valide.',
      email: 'Indiquez une adresse e-mail valide.',
    });
  });

  it('conserve la disponibilité comme donnée de candidature', () => {
    expect(INITIAL_CAREER_APPLICATION).toHaveProperty('availability', '');
  });
});
