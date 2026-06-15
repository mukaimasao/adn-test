import React from 'react';
import Icon from './Icon';
import SectionHead from './SectionHead';

const SERVICES = [
  { icon: 'shine', t: 'Limpeza residencial', d: 'Ambientes limpos, organizados e cuidados com atenção aos detalhes.' },
  { icon: 'hanger', t: 'Passar roupa', d: 'Roupas bem cuidadas para facilitar a sua rotina.' },
  { icon: 'wash', t: 'Lavar roupa', d: 'Apoio nas tarefas de lavanderia do dia a dia.' },
  { icon: 'pot', t: 'Cozinhar', d: 'Auxílio no preparo de refeições conforme a necessidade da família.' },
  { icon: 'basket', t: 'Compras do dia a dia', d: 'Apoio em pequenas compras e tarefas essenciais.' },
  { icon: 'homeCheck', t: 'Empregada doméstica fixa', d: 'Uma solução contínua para quem precisa de apoio regular em casa.'},
];

export default function Servicos() {
  return (
    <section className="section svc zone-soft" id="servicos">
      <div className="container">
        <div className="svc-head reveal">
          <SectionHead
            eyebrow="Nossos serviços"
            title="Soluções domésticas para"
            accent="cada necessidade"
          />
          <p className="sec-sub" style={{ marginTop: 0, maxWidth: '34ch' }}>
            Combinamos cuidado, organização e confiança em cada visita ao seu lar.
          </p>
        </div>

        <div className="svc-list reveal">
          {SERVICES.map((s) => (
            <a
              className={`svc-item`}
              href="#contratar"
              key={s.t}
            >
              <span className="svc-ic-wrap svc-ic">
                <Icon name={s.icon} size={28} />
              </span>
              <span className="svc-body">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </span>
              <span className="svc-arrow">
                <Icon name="arrow" size={18} />
              </span>
            </a>
          ))}
        </div>

        <div className="svc-foot reveal">
          <p>Precisa de algo específico? Conte para nós e encontramos a melhor solução para o seu lar.</p>
          <a className="link-ul" href="#contratar">
            Fale conosco <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
