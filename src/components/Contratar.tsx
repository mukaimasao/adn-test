'use client';

import React, { useState } from 'react';
import Icon from './Icon';
import Button from './Button';
import SectionHead from './SectionHead';
import { TextInput, Textarea, Select, ChoiceGroup, FormSuccess } from './FormKit';

const SERVICE_OPTIONS = [
  { value: 'limpeza', label: 'Limpeza residencial', icon: 'shine' },
  { value: 'passar', label: 'Passar roupa', icon: 'hanger' },
  { value: 'lavar', label: 'Lavar roupa', icon: 'wash' },
  { value: 'cozinhar', label: 'Cozinhar', icon: 'pot' },
  { value: 'fixa', label: 'Empregada doméstica fixa', icon: 'homeCheck' },
  { value: 'outro', label: 'Outro', icon: 'plus' },
];

const FREQ_OPTIONS = ['Pontual (uma vez)', 'Semanal', 'Quinzenal', 'Mensal', 'A combinar'];

interface FormState {
  nome: string;
  email: string;
  tel: string;
  numero: string;
  cidade: string;
  freq: string;
  msg: string;
  servicos: string[];
  outro: string;
}

const INITIAL: FormState = {
  nome: '', email: '', tel: '', numero: '', cidade: '',
  freq: '', msg: '', servicos: [], outro: '',
};

export default function Contratar() {
  const [f, setF] = useState<FormState>(INITIAL);
  const [err, setErr] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState) => (v: string | string[]) => {
    setF((s) => ({ ...s, [k]: v }));
    setErr((e) => ({ ...e, [k]: undefined }));
  };

  const wantsOutro = f.servicos.includes('outro');

  const validate = () => {
    const e: typeof err = {};
    if (!f.nome.trim()) e.nome = 'Informe seu nome completo.';
    if (!f.email.trim()) e.email = 'Informe um e-mail.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'E-mail inválido.';
    if (!f.tel.trim()) e.tel = 'Informe um telefone ou WhatsApp.';
    if (!f.servicos.length) e.servicos = 'Selecione ao menos um serviço.';
    if (wantsOutro && !f.outro.trim()) e.outro = 'Descreva o serviço desejado.';
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  const reset = () => {
    setF(INITIAL);
    setErr({});
    setSent(false);
  };

  return (
    <section className="section contratar" id="contratar">
      <div className="container">
        <div className="contratar-grid">
          {/* Aside */}
          <div className="contratar-aside reveal">
            <SectionHead
              eyebrow="Quero contratar"
              title="Solicite um"
              accent="orçamento"
              sub="Preencha seus dados e entraremos em contato para entender sua necessidade e indicar a melhor solução para o seu lar — sem compromisso."
            />
            <div className="contratar-script">
              <span className="script">La confiance à domicile</span>
              <p>Cuidamos da sua casa como se fosse a nossa.</p>
            </div>
            <a className="phone-line" href="tel:+3232486173577">
              <Icon name="phone" size={20} /> (32) 486173577
            </a>
          </div>

          {/* Form */}
          <div className="form-card reveal">
            {sent ? (
              <FormSuccess title="Pedido enviado com sucesso!" onReset={reset}>
                Obrigada, {f.nome.split(' ')[0] || 'tudo certo'}! Recebemos sua solicitação e
                entraremos em contato em breve pelo telefone ou e-mail informado.
              </FormSuccess>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="fgroup">
                  <div className="fgroup__title">
                    <span className="n">01</span> Dados principais
                  </div>
                  <div className="fgrid fgrid--2">
                    <TextInput
                      id="nome" label="Nome completo" placeholder="Seu nome"
                      value={f.nome} onChange={set('nome') as (v: string) => void}
                      required error={err.nome} full autoComplete="name"
                    />
                    <TextInput
                      id="email" label="E-mail" type="email" placeholder="voce@email.com"
                      value={f.email} onChange={set('email') as (v: string) => void}
                      required error={err.email} autoComplete="email" inputMode="email"
                    />
                    <TextInput
                      id="tel" label="Telefone / WhatsApp" type="tel" placeholder="(32) 4 8617 3577"
                      value={f.tel} onChange={set('tel') as (v: string) => void}
                      required error={err.tel} autoComplete="tel" inputMode="tel"
                    />
                    <TextInput
                      id="numero" label="Nº de usuário titres-services"
                      placeholder="Se já possuir (opcional)"
                      value={f.numero} onChange={set('numero') as (v: string) => void}
                      help="Deixe em branco se ainda não tiver."
                    />
                  </div>
                </div>

                <div className="fgroup">
                  <div className="fgroup__title">
                    <span className="n">02</span> Tipo de serviço
                  </div>
                  <div className={`field${err.servicos ? ' invalid' : ''}`}>
                    <ChoiceGroup
                      type="checkbox" name="servicos"
                      options={SERVICE_OPTIONS}
                      value={f.servicos}
                      onChange={set('servicos') as (v: string | string[]) => void}
                      columns={2}
                    />
                    {err.servicos ? (
                      <span className="err">
                        <Icon name="alert" size={14} />{err.servicos}
                      </span>
                    ) : (
                      <span className="help" style={{ marginTop: 8 }}>
                        Selecione um ou mais serviços.
                      </span>
                    )}
                  </div>
                  <div
                    className={`field-reveal${wantsOutro ? ' show' : ''}`}
                    style={{ marginTop: wantsOutro ? 16 : 0 }}
                    aria-hidden={!wantsOutro}
                  >
                    <div>
                      <Textarea
                        id="outro" label="Especifique o serviço desejado"
                        placeholder="Ex: organização da casa, apoio pontual, outra necessidade..."
                        value={f.outro} onChange={set('outro') as (v: string) => void}
                        required={wantsOutro} error={wantsOutro ? err.outro : undefined}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                <div className="fgroup">
                  <div className="fgroup__title">
                    <span className="n">03</span> Informações adicionais
                  </div>
                  <div className="fgrid fgrid--2">
                    <TextInput
                      id="cidade" label="Cidade" placeholder="Sua cidade"
                      value={f.cidade} onChange={set('cidade') as (v: string) => void}
                      autoComplete="address-level2"
                    />
                    <Select
                      id="freq" label="Frequência desejada"
                      value={f.freq} onChange={set('freq') as (v: string) => void}
                      options={FREQ_OPTIONS} placeholder="Selecione a frequência"
                    />
                    <Textarea
                      id="msg" label="Mensagem / observações"
                      placeholder="Conte um pouco sobre o que você precisa…"
                      value={f.msg} onChange={set('msg') as (v: string) => void} full
                    />
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" block iconRight="arrow">
                  Solicitar Orçamento
                </Button>
                <div className="microcopy" style={{ justifyContent: 'center', marginTop: 14 }}>
                  <Icon name="lock" size={16} /> Seus dados serão usados apenas para contato.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
