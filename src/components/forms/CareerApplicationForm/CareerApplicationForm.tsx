'use client';

import { useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { Checkbox, FormSuccess, Select, TextInput } from '@/components/ui/FormControls';
import { HOURS_OPTIONS, INITIAL_CAREER_APPLICATION } from './CareerApplicationForm.data';
import type { CareerApplicationErrors, CareerApplicationValues } from './CareerApplicationForm.types';
import { validateCareerApplication } from './CareerApplicationForm.validation';

export default function CareerApplicationForm() {
  const [values, setValues] = useState<CareerApplicationValues>(INITIAL_CAREER_APPLICATION);
  const [errors, setErrors] = useState<CareerApplicationErrors>({});
  const [sent, setSent] = useState(false);

  const setValue = (key: keyof CareerApplicationValues) => (value: string | boolean) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateCareerApplication(values);
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      const target =
        document.getElementById(firstError) ??
        document.querySelector<HTMLElement>(`[name="${firstError}"]`);
      target?.focus();
      return;
    }
    setSent(true);
  };

  const reset = () => {
    setValues(INITIAL_CAREER_APPLICATION);
    setErrors({});
    setSent(false);
  };

  if (sent) {
    return (
      <div className="form-card [&_.fgroup__title]:text-[#a87b00] [&_.fgroup__title_.n]:text-[var(--dourado-suave)]" role="status" aria-live="polite">
        <FormSuccess title="Votre candidature a bien été enregistrée." onReset={reset}>
          Merci, {values.firstName} ! Nous
          l’examinerons avec attention et vous contacterons si une opportunité correspond à votre profil.
        </FormSuccess>
      </div>
    );
  }

  return (
    <div className="form-card [&_.fgroup__title]:text-[#a87b00] [&_.fgroup__title_.n]:text-[var(--dourado-suave)]">
      <form onSubmit={submit} noValidate>
        <div className="fgroup">
          <h3 className="fgroup__title">Coordonnées</h3>
          <div className="fgrid fgrid--2">
            <Select id="hoursWanted" label="Combien d’heures souhaitez-vous travailler ?" options={HOURS_OPTIONS} value={values.hoursWanted} onChange={setValue('hoursWanted') as (value: string) => void} required error={errors.hoursWanted} full />
            <TextInput id="firstName" label="Prénom" placeholder="Votre prénom" value={values.firstName} onChange={setValue('firstName') as (value: string) => void} required error={errors.firstName} autoComplete="given-name" />
            <TextInput id="lastName" label="Nom de famille" placeholder="Votre nom de famille" value={values.lastName} onChange={setValue('lastName') as (value: string) => void} required error={errors.lastName} autoComplete="family-name" />
            <TextInput id="email" label="E-mail" type="email" placeholder="vous@exemple.be" value={values.email} onChange={setValue('email') as (value: string) => void} required error={errors.email} full autoComplete="email" inputMode="email" />
            <TextInput id="street" label="Rue et numéro" placeholder="Rue et numéro" value={values.street} onChange={setValue('street') as (value: string) => void} required error={errors.street} full autoComplete="street-address" />
            <TextInput id="city" label="Ville" placeholder="Votre ville" value={values.city} onChange={setValue('city') as (value: string) => void} required error={errors.city} autoComplete="address-level2" />
            <TextInput id="postalCode" label="Code postal" placeholder="Code postal" value={values.postalCode} onChange={setValue('postalCode') as (value: string) => void} required error={errors.postalCode} autoComplete="postal-code" inputMode="numeric" />
            <TextInput id="phone" label="Téléphone" type="tel" placeholder="+32 486 17 35 77" value={values.phone} onChange={setValue('phone') as (value: string) => void} required error={errors.phone} full autoComplete="tel" inputMode="tel" />
          </div>
        </div>

        <Checkbox
          id="privacyConsent"
          checked={values.privacyConsent}
          onChange={setValue('privacyConsent') as (value: boolean) => void}
          required
          error={errors.privacyConsent}
        >
          J’accepte la{' '}
          <a href="/politique-de-confidentialite" target="_blank" rel="noopener noreferrer">
            politique de confidentialité
          </a>
          . <span className="req" aria-label="champ obligatoire">*</span>
        </Checkbox>

        <Button type="submit" variant="gold" size="lg" block icon="briefcase" iconRight="arrow" className="mt-5">
          Envoyer ma candidature
        </Button>
        <div className="microcopy" style={{ justifyContent: 'center', marginTop: 14 }}>
          <Icon name="lock" size={16} /> Vos données seront traitées de manière confidentielle.
        </div>
      </form>
    </div>
  );
}
