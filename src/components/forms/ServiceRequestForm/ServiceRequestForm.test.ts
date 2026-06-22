import { describe, expect, it } from 'vitest';
import { INITIAL_SERVICE_REQUEST, SERVICE_OPTIONS } from './ServiceRequestForm.data';
import { validateServiceRequest } from './ServiceRequestForm.validation';

describe('validateServiceRequest', () => {
  it('rejette les champs obligatoires vides avec des messages français', () => {
    expect(validateServiceRequest(INITIAL_SERVICE_REQUEST)).toMatchObject({
      fullName: 'Indiquez votre nom complet.',
      email: 'Indiquez votre adresse e-mail.',
      phone: 'Indiquez votre numéro de téléphone.',
      services: 'Sélectionnez au moins un service.',
    });
  });

  it.each(['+32 486 17 35 77', '0486/17.35.77', '(+32) 486-17-35-77'])(
    'accepte un format téléphonique belge courant : %s',
    (phone) => {
      const values = {
        ...INITIAL_SERVICE_REQUEST,
        fullName: 'Marie Dupont',
        email: 'marie@example.be',
        phone,
        services: ['nettoyage'],
      };

      expect(validateServiceRequest(values).phone).toBeUndefined();
    },
  );

  it('rejette un format téléphonique non plausible', () => {
    const values = {
      ...INITIAL_SERVICE_REQUEST,
      fullName: 'Marie Dupont',
      email: 'marie@example.be',
      phone: '123',
      services: ['nettoyage'],
    };

    expect(validateServiceRequest(values).phone).toBe('Utilisez un format de téléphone valide.');
  });

  it('demande une précision lorsque autre est sélectionné', () => {
    const values = {
      ...INITIAL_SERVICE_REQUEST,
      fullName: 'Marie Dupont',
      email: 'marie@example.be',
      phone: '+32 486 17 35 77',
      services: ['autre'],
    };

    expect(validateServiceRequest(values).otherService).toBe('Précisez le service souhaité.');
  });

  it('ne contient aucune donnée de fréquence', () => {
    expect(INITIAL_SERVICE_REQUEST).not.toHaveProperty('frequency');
    expect(SERVICE_OPTIONS.every((option) => option.value !== 'frequency')).toBe(true);
  });
});
