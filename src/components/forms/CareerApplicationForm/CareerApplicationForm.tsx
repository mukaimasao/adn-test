'use client';

import { useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { ChoiceGroup, FormSuccess, Textarea, TextInput, Upload } from '@/components/ui/FormControls';
import {
  AVAILABILITY_OPTIONS,
  CAREER_SERVICE_OPTIONS,
  EXPERIENCE_OPTIONS,
  INITIAL_CAREER_APPLICATION,
} from './CareerApplicationForm.data';
import type { CareerApplicationErrors, CareerApplicationValues } from './CareerApplicationForm.types';
import { validateCareerApplication } from './CareerApplicationForm.validation';

export default function CareerApplicationForm() {
  const [values, setValues] = useState<CareerApplicationValues>(INITIAL_CAREER_APPLICATION);
  const [cv, setCv] = useState<File | null>(null);
  const [errors, setErrors] = useState<CareerApplicationErrors>({});
  const [sent, setSent] = useState(false);

  const setValue = (key: keyof CareerApplicationValues) => (value: string | string[]) => {
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
    setCv(null);
    setErrors({});
    setSent(false);
  };

  if (sent) {
    return (
      <div className="form-card [&_.fgroup__title]:text-[#a87b00] [&_.fgroup__title_.n]:text-[var(--dourado-suave)]" aria-live="polite">
        <FormSuccess title="Votre candidature a bien été enregistrée." onReset={reset}>
          Merci, {values.fullName.split(' ')[0]} ! Nous
          l’examinerons avec attention et vous contacterons si une opportunité correspond à votre profil.
        </FormSuccess>
      </div>
    );
  }

  return (
    <div className="form-card [&_.fgroup__title]:text-[#a87b00] [&_.fgroup__title_.n]:text-[var(--dourado-suave)]">
      <form onSubmit={submit} noValidate>
        <div className="fgroup">
          <div className="fgroup__title"><span className="n">1</span> Coordonnées</div>
          <div className="fgrid fgrid--2">
            <TextInput id="fullName" label="Nom complet" placeholder="Votre nom" value={values.fullName} onChange={setValue('fullName') as (value: string) => void} required error={errors.fullName} full autoComplete="name" />
            <TextInput id="birthDate" label="Date de naissance" type="date" value={values.birthDate} onChange={setValue('birthDate') as (value: string) => void} autoComplete="bday" lang="fr-BE" />
            <TextInput id="phone" label="Téléphone" type="tel" placeholder="+32 486 17 35 77" value={values.phone} onChange={setValue('phone') as (value: string) => void} required error={errors.phone} autoComplete="tel" inputMode="tel" />
            <TextInput id="email" label="Adresse e-mail" type="email" placeholder="vous@exemple.be" value={values.email} onChange={setValue('email') as (value: string) => void} required error={errors.email} autoComplete="email" inputMode="email" />
            <TextInput id="address" label="Adresse" placeholder="Rue et numéro" value={values.address} onChange={setValue('address') as (value: string) => void} full autoComplete="street-address" />
            <TextInput id="locality" label="Localité" placeholder="Votre localité" value={values.locality} onChange={setValue('locality') as (value: string) => void} autoComplete="address-level2" />
            <TextInput id="district" label="Quartier" placeholder="Votre quartier" value={values.district} onChange={setValue('district') as (value: string) => void} autoComplete="address-level3" />
          </div>
        </div>

        <div className="fgroup">
          <div className="fgroup__title"><span className="n">2</span> Expérience</div>
          <div className="fgrid fgrid--2">
            <div className={`field${errors.experience ? ' invalid' : ''}`}>
              <label>Avez-vous déjà travaillé comme aide-ménagère ? <span className="req" aria-label="champ obligatoire">*</span></label>
              <ChoiceGroup type="radio" name="experience" gold options={EXPERIENCE_OPTIONS} value={values.experience} onChange={setValue('experience')} columns={2} ariaDescribedBy={errors.experience ? 'experience-error' : undefined} invalid={Boolean(errors.experience)} />
              {errors.experience && <span className="err" id="experience-error" role="alert"><Icon name="alert" size={14} /> {errors.experience}</span>}
            </div>
            <TextInput id="experienceYears" label="Combien d’années d’expérience ?" type="number" min="0" placeholder="Ex. : 3" value={values.experienceYears} onChange={setValue('experienceYears') as (value: string) => void} inputMode="numeric" help="Laissez ce champ vide si vous n’avez pas d’expérience." />
          </div>
        </div>

        <div className="fgroup">
          <div className="fgroup__title"><span className="n">3</span> Tâches réalisées</div>
          <ChoiceGroup type="checkbox" name="career-services" gold options={CAREER_SERVICE_OPTIONS} value={values.services} onChange={setValue('services')} columns={2} />
        </div>

        <div className="fgroup">
          <div className="fgroup__title"><span className="n">4</span> Disponibilités</div>
          <div className={`field${errors.availability ? ' invalid' : ''}`}>
            <ChoiceGroup type="radio" name="availability" gold options={AVAILABILITY_OPTIONS} value={values.availability} onChange={setValue('availability')} columns={2} ariaDescribedBy={errors.availability ? 'availability-error' : undefined} invalid={Boolean(errors.availability)} />
            {errors.availability && <span className="err" id="availability-error" role="alert"><Icon name="alert" size={14} /> {errors.availability}</span>}
          </div>
        </div>

        <div className="fgroup">
          <div className="fgroup__title"><span className="n">5</span> Curriculum vitæ</div>
          <Upload id="cv" file={cv} onFile={setCv} />
        </div>

        <div className="fgroup">
          <div className="fgroup__title"><span className="n">6</span> Remarques</div>
          <Textarea id="notes" label="À propos de vous" placeholder="Parlez-nous brièvement de votre expérience et de ce que vous recherchez…" value={values.notes} onChange={setValue('notes') as (value: string) => void} full />
        </div>

        <Button type="submit" variant="gold" size="lg" block icon="briefcase" iconRight="arrow">
          Envoyer ma candidature
        </Button>
        <div className="microcopy" style={{ justifyContent: 'center', marginTop: 14 }}>
          <Icon name="lock" size={16} /> Vos données seront traitées de manière confidentielle.
        </div>
      </form>
    </div>
  );
}
