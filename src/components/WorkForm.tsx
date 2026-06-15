'use client';

import React, { useState } from 'react';
import Icon from './Icon';
import Button from './Button';
import { TextInput, Textarea, ChoiceGroup, Upload, FormSuccess } from './FormKit';

const DO_OPTIONS = [
  { value: 'limpeza', label: 'Limpeza residencial', icon: 'sparkles' },
  { value: 'passar', label: 'Passar roupa', icon: 'shirt' },
  { value: 'cozinhar', label: 'Cozinhar', icon: 'utensils' },
  { value: 'lavar', label: 'Lavar roupa', icon: 'droplets' },
];

const AVAIL_OPTIONS = [
  { value: 'meio', label: 'Meio período' },
  { value: 'integral', label: 'Período integral' },
  { value: 'diarista', label: 'Diarista' },
];

interface FormState {
  nome: string;
  nascimento: string;
  tel: string;
  email: string;
  endereco: string;
  cidade: string;
  bairro: string;
  experiencia: string;
  anos: string;
  servicos: string[];
  disponibilidade: string;
  obs: string;
}

const INITIAL: FormState = {
  nome: '', nascimento: '', tel: '', email: '', endereco: '',
  cidade: '', bairro: '', experiencia: '', anos: '',
  servicos: [], disponibilidade: '', obs: '',
};

export default function WorkForm() {
  const [f, setF] = useState<FormState>(INITIAL);
  const [cv, setCv] = useState<File | null>(null);
  const [err, setErr] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState) => (v: string | string[]) => {
    setF((s) => ({ ...s, [k]: v }));
    setErr((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: typeof err = {};
    if (!f.nome.trim()) e.nome = 'Informe seu nome completo.';
    if (!f.tel.trim()) e.tel = 'Informe um telefone ou WhatsApp.';
    if (!f.email.trim()) e.email = 'Informe um e-mail.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'E-mail inválido.';
    if (!f.experiencia) e.experiencia = 'Selecione uma opção.';
    if (!f.disponibilidade) e.disponibilidade = 'Selecione sua disponibilidade.';
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      const first = document.querySelector('.work-form .field.invalid') as HTMLElement;
      if (first) first.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return;
    }
    setSent(true);
    const workForm = document.querySelector('.work-form') as HTMLElement;
    if (workForm) window.scrollTo({ top: workForm.offsetTop - 90, behavior: 'smooth' });
  };

  const reset = () => {
    setF(INITIAL);
    setCv(null);
    setErr({});
    setSent(false);
  };

  return (
    <div className="form-card work-form">
      {sent ? (
        <FormSuccess title="Candidatura cadastrada!" onReset={reset}>
          Obrigada, {f.nome.split(' ')[0] || 'tudo certo'}! Analisaremos sua candidatura com
          cuidado e entraremos em contato caso surja uma oportunidade compatível.
        </FormSuccess>
      ) : (
        <form onSubmit={submit} noValidate>
          {/* 1. Dados pessoais */}
          <div className="fgroup">
            <div className="fgroup__title">
              <span className="n">1</span> Dados pessoais
            </div>
            <div className="fgrid fgrid--2">
              <TextInput
                id="nome" label="Nome completo" placeholder="Seu nome"
                value={f.nome} onChange={set('nome') as (v: string) => void}
                required error={err.nome} full autoComplete="name"
              />
              <TextInput
                id="nascimento" label="Data de nascimento" type="date"
                value={f.nascimento} onChange={set('nascimento') as (v: string) => void}
              />
              <TextInput
                id="tel" label="Telefone / WhatsApp" type="tel" placeholder="(32) 4 8617 3577"
                value={f.tel} onChange={set('tel') as (v: string) => void}
                required error={err.tel} inputMode="tel"
              />
              <TextInput
                id="email" label="E-mail" type="email" placeholder="voce@email.com"
                value={f.email} onChange={set('email') as (v: string) => void}
                required error={err.email} inputMode="email"
              />
              <TextInput
                id="endereco" label="Endereço" placeholder="Rua, número"
                value={f.endereco} onChange={set('endereco') as (v: string) => void} full
              />
              <TextInput
                id="cidade" label="Cidade" placeholder="Sua cidade"
                value={f.cidade} onChange={set('cidade') as (v: string) => void}
              />
              <TextInput
                id="bairro" label="Bairro" placeholder="Seu bairro"
                value={f.bairro} onChange={set('bairro') as (v: string) => void}
              />
            </div>
          </div>

          {/* 2. Experiência */}
          <div className="fgroup">
            <div className="fgroup__title">
              <span className="n">2</span> Experiência
            </div>
            <div className="fgrid fgrid--2">
              <div className={`field${err.experiencia ? ' invalid' : ''}`}>
                <label style={{ fontFamily: 'var(--font-head)', fontWeight: 500, fontSize: 14, marginBottom: 2 }}>
                  Já trabalhou como doméstica? <span className="req">*</span>
                </label>
                <ChoiceGroup
                  type="radio" name="experiencia" gold
                  options={[{ value: 'sim', label: 'Sim' }, { value: 'nao', label: 'Não' }]}
                  value={f.experiencia}
                  onChange={set('experiencia') as (v: string | string[]) => void}
                  columns={2}
                />
                {err.experiencia && (
                  <span className="err">
                    <Icon name="alert" size={14} />{err.experiencia}
                  </span>
                )}
              </div>
              <TextInput
                id="anos" label="Quantos anos de experiência?" type="number" placeholder="Ex.: 3"
                value={f.anos} onChange={set('anos') as (v: string) => void}
                inputMode="numeric" help="Deixe em branco se não tiver."
              />
            </div>
          </div>

          {/* 3. Serviços que realiza */}
          <div className="fgroup">
            <div className="fgroup__title">
              <span className="n">3</span> Serviços que realiza
            </div>
            <ChoiceGroup
              type="checkbox" name="do-servicos" gold
              options={DO_OPTIONS}
              value={f.servicos}
              onChange={set('servicos') as (v: string | string[]) => void}
              columns={2}
            />
          </div>

          {/* 4. Disponibilidade */}
          <div className="fgroup">
            <div className="fgroup__title">
              <span className="n">4</span> Disponibilidade
            </div>
            <div className={`field${err.disponibilidade ? ' invalid' : ''}`}>
              <ChoiceGroup
                type="radio" name="disponibilidade" gold
                options={AVAIL_OPTIONS}
                value={f.disponibilidade}
                onChange={set('disponibilidade') as (v: string | string[]) => void}
                columns={2}
              />
              {err.disponibilidade && (
                <span className="err">
                  <Icon name="alert" size={14} />{err.disponibilidade}
                </span>
              )}
            </div>
          </div>

          {/* 5. Currículo */}
          <div className="fgroup">
            <div className="fgroup__title">
              <span className="n">5</span> Currículo
            </div>
            <Upload id="cv" file={cv} onFile={setCv} />
          </div>

          {/* 6. Observações */}
          <div className="fgroup">
            <div className="fgroup__title">
              <span className="n">6</span> Observações
            </div>
            <Textarea
              id="obs"
              placeholder="Conte um pouco sobre você, sua disponibilidade e o que procura…"
              value={f.obs} onChange={set('obs') as (v: string) => void} full
            />
          </div>

          <Button type="submit" variant="gold" size="lg" block icon="briefcase" iconRight="arrow">
            Cadastrar Candidatura
          </Button>
          <div className="microcopy" style={{ justifyContent: 'center', marginTop: 14 }}>
            <Icon name="lock" size={16} /> Seus dados serão tratados com confidencialidade.
          </div>
        </form>
      )}
    </div>
  );
}
