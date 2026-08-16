'use client';

import { useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { ChoiceGroup, Checkbox, FormSuccess, Textarea, TextInput } from '@/components/ui/FormControls';
import { DAY_OPTIONS, INITIAL_SERVICE_REQUEST } from './ServiceRequestForm.data';
import type { ServiceRequestErrors, ServiceRequestValues } from './ServiceRequestForm.types';
import { validateServiceRequest } from './ServiceRequestForm.validation';

export default function ServiceRequestForm() {
  const [values, setValues] = useState<ServiceRequestValues>(INITIAL_SERVICE_REQUEST);
  const [errors, setErrors] = useState<ServiceRequestErrors>({});
  const [sent, setSent] = useState(false);

  const setValue = (key: keyof ServiceRequestValues) => (value: string | string[] | boolean) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateServiceRequest(values);
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
    setValues(INITIAL_SERVICE_REQUEST);
    setErrors({});
    setSent(false);
  };

  if (sent) {
    return (
      <div className="form-card reveal" role="status" aria-live="polite">
        <FormSuccess title="Votre demande a bien été enregistrée." onReset={reset}>
          Merci, {values.firstName} ! Notre
          équipe vous contactera afin d’organiser la prestation.
        </FormSuccess>
      </div>
    );
  }

  return (
    <div className="form-card reveal">
      <form onSubmit={submit} noValidate>
        <div className="fgroup">
          <h3 className="fgroup__title">
            <span className="n">01</span> Coordonnées
          </h3>
          <div className="fgrid fgrid--2">
            <TextInput
              id="firstName"
              label="Prénom"
              placeholder="Votre prénom"
              value={values.firstName}
              onChange={setValue('firstName') as (value: string) => void}
              required
              error={errors.firstName}
              autoComplete="given-name"
            />
            <TextInput
              id="lastName"
              label="Nom de famille"
              placeholder="Votre nom de famille"
              value={values.lastName}
              onChange={setValue('lastName') as (value: string) => void}
              required
              error={errors.lastName}
              autoComplete="family-name"
            />
            <TextInput
              id="street"
              label="Rue et numéro"
              placeholder="Rue et numéro"
              value={values.street}
              onChange={setValue('street') as (value: string) => void}
              required
              error={errors.street}
              full
              autoComplete="street-address"
            />
            <TextInput
              id="city"
              label="Ville"
              placeholder="Votre ville"
              value={values.city}
              onChange={setValue('city') as (value: string) => void}
              required
              error={errors.city}
              autoComplete="address-level2"
            />
            <TextInput
              id="postalCode"
              label="Code postal"
              placeholder="Code postal"
              value={values.postalCode}
              onChange={setValue('postalCode') as (value: string) => void}
              required
              error={errors.postalCode}
              autoComplete="postal-code"
              inputMode="numeric"
            />
            <TextInput
              id="email"
              label="Adresse e-mail"
              type="email"
              placeholder="vous@exemple.be"
              value={values.email}
              onChange={setValue('email') as (value: string) => void}
              required
              error={errors.email}
              full
              autoComplete="email"
              inputMode="email"
            />
            <TextInput
              id="phone"
              label="Téléphone"
              type="tel"
              placeholder="+32 486 17 35 77"
              value={values.phone}
              onChange={setValue('phone') as (value: string) => void}
              required
              error={errors.phone}
              full
              autoComplete="tel"
              inputMode="tel"
            />
          </div>
        </div>

        <div className="fgroup">
          <h3 className="fgroup__title">
            <span className="n">02</span> Informations complémentaires
          </h3>
          <div className="fgrid fgrid--2">
            <TextInput
              id="pluxeeNumber"
              label="Nº identifiant pluxee"
              placeholder="Si vous en avez déjà un"
              value={values.pluxeeNumber}
              onChange={setValue('pluxeeNumber') as (value: string) => void}
              optional
              full
              help="Laissez ce champ vide si vous n’en avez pas encore."
            />
            <TextInput
              id="hoursWanted"
              label="Nombre d’heures souhaitées"
              type="number"
              min="0"
              placeholder="Ex. : 4"
              value={values.hoursWanted}
              onChange={setValue('hoursWanted') as (value: string) => void}
              optional
              full
              inputMode="numeric"
            />
            <div className="field ffull">
              <label>
                <span>Jours disponibles</span>
                <span className="optional">Facultatif</span>
              </label>
              <ChoiceGroup
                type="checkbox"
                name="availableDays"
                options={DAY_OPTIONS}
                value={values.availableDays}
                onChange={setValue('availableDays')}
                columns={3}
              />
              <span className="help">Sélectionnez les jours qui vous conviennent.</span>
            </div>
            <Textarea
              id="comment"
              label="Commentaire"
              placeholder="Des précisions à partager ?"
              value={values.comment}
              onChange={setValue('comment') as (value: string) => void}
              optional
              full
            />
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

        <Button type="submit" variant="primary" size="lg" block iconRight="arrow" className="mt-5">
          Envoyer ma demande
        </Button>
        <div className="microcopy" style={{ justifyContent: 'center', marginTop: 14 }}>
          <Icon name="lock" size={16} /> Vos données sont utilisées uniquement pour vous contacter.
        </div>
      </form>
    </div>
  );
}
