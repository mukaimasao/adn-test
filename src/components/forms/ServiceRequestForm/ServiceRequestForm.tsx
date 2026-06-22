'use client';

import { useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { ChoiceGroup, FormSuccess, Textarea, TextInput } from '@/components/ui/FormControls';
import { INITIAL_SERVICE_REQUEST, SERVICE_OPTIONS } from './ServiceRequestForm.data';
import type { ServiceRequestErrors, ServiceRequestValues } from './ServiceRequestForm.types';
import { validateServiceRequest } from './ServiceRequestForm.validation';

export default function ServiceRequestForm() {
  const [values, setValues] = useState<ServiceRequestValues>(INITIAL_SERVICE_REQUEST);
  const [errors, setErrors] = useState<ServiceRequestErrors>({});
  const [sent, setSent] = useState(false);

  const setValue = (key: keyof ServiceRequestValues) => (value: string | string[]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const wantsOther = values.services.includes('autre');

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
      <div className="form-card reveal" aria-live="polite">
        <FormSuccess title="Votre demande a bien été enregistrée." onReset={reset}>
          Merci, {values.fullName.split(' ')[0]} ! Notre
          équipe vous contactera afin d’organiser la prestation.
        </FormSuccess>
      </div>
    );
  }

  return (
    <div className="form-card reveal">
      <form onSubmit={submit} noValidate>
        <div className="fgroup">
          <div className="fgroup__title">
            <span className="n">01</span> Coordonnées
          </div>
          <div className="fgrid fgrid--2">
            <TextInput
              id="fullName"
              label="Nom complet"
              placeholder="Votre nom"
              value={values.fullName}
              onChange={setValue('fullName') as (value: string) => void}
              required
              error={errors.fullName}
              full
              autoComplete="name"
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
              autoComplete="tel"
              inputMode="tel"
            />
            <TextInput
              id="customerNumber"
              label="Nº d’utilisateur titres-services"
              placeholder="Si vous en avez déjà un"
              value={values.customerNumber}
              onChange={setValue('customerNumber') as (value: string) => void}
              help="Laissez ce champ vide si vous n’en avez pas encore."
            />
          </div>
        </div>

        <div className="fgroup">
          <div className="fgroup__title">
            <span className="n">02</span> Aide souhaitée
          </div>
          <div className={`field${errors.services ? ' invalid' : ''}`}>
            <ChoiceGroup
              type="checkbox"
              name="services"
              options={SERVICE_OPTIONS}
              value={values.services}
              onChange={setValue('services')}
              columns={2}
              ariaDescribedBy={errors.services ? 'services-error' : undefined}
              invalid={Boolean(errors.services)}
            />
            {errors.services ? (
              <span className="err" id="services-error" role="alert">
                <Icon name="alert" size={14} /> {errors.services}
              </span>
            ) : (
              <span className="help">Sélectionnez un ou plusieurs services.</span>
            )}
          </div>
          <div
            className={`field-reveal${wantsOther ? ' show' : ''}`}
            style={{ marginTop: wantsOther ? 16 : 0 }}
            aria-hidden={!wantsOther}
          >
            <div>
              <Textarea
                id="otherService"
                label="Précisez le service souhaité"
                placeholder="Décrivez brièvement votre besoin…"
                value={values.otherService}
                onChange={setValue('otherService') as (value: string) => void}
                required={wantsOther}
                error={wantsOther ? errors.otherService : undefined}
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="fgroup">
          <div className="fgroup__title">
            <span className="n">03</span> Informations complémentaires
          </div>
          <div className="fgrid fgrid--2">
            <TextInput
              id="locality"
              label="Localité"
              placeholder="Votre localité"
              value={values.locality}
              onChange={setValue('locality') as (value: string) => void}
              autoComplete="address-level2"
            />
            <Textarea
              id="message"
              label="Message ou remarques"
              placeholder="Décrivez vos besoins et vos disponibilités…"
              value={values.message}
              onChange={setValue('message') as (value: string) => void}
              full
            />
          </div>
        </div>

        <Button type="submit" variant="primary" size="lg" block iconRight="arrow">
          Envoyer ma demande
        </Button>
        <div className="microcopy" style={{ justifyContent: 'center', marginTop: 14 }}>
          <Icon name="lock" size={16} /> Vos données sont utilisées uniquement pour vous contacter.
        </div>
      </form>
    </div>
  );
}
