import React from 'react';
import Icon from './Icon';

const WHY = [
  { icon: 'award', t: 'Profissionais qualificadas', d: 'Seleção cuidadosa e acompanhamento contínuo das colaboradoras.' },
  { icon: 'shield', t: 'Empresa credenciada', d: 'Atuação no modelo titres-services, com mais segurança para todos.' },
  { icon: 'handshake', t: 'Atendimento de confiança', d: 'Relação próxima, humana e transparente com cada cliente.' },
  { icon: 'calFlex', t: 'Flexibilidade para sua rotina', d: 'Serviços adaptados à necessidade de cada casa.' },
];

export default function PorQue() {
  return (
    <section className="section why" id="por-que">
      <svg
        className="why__curve-top"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,0 L1440,0 L1440,30 C1200,68 960,68 720,46 C480,24 240,24 0,52 Z" />
      </svg>

      <span className="why__deco" />

      <div className="container">
        <div className="why-grid">
          <div className="why-lead reveal">
            <span className="eyebrow eyebrow--rule">Por que nos escolher</span>
            <h2>
              Razões para confiar na <span className="accent">ADN</span>
            </h2>
            <p>
              Cada detalhe pensado para trazer tranquilidade ao seu lar — do primeiro contato ao
              serviço realizado.
            </p>
          </div>

          <div className="why-points reveal">
            {WHY.map((w) => (
              <div className="why-point" key={w.t}>
                <span className="why-point__ic">
                  <Icon name={w.icon} size={30} stroke={1.6} />
                </span>
                <span>
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <svg
        className="why__curve-bot"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,80 L1440,80 L1440,40 C1200,8 960,8 720,30 C480,52 240,52 0,26 Z" />
      </svg>
    </section>
  );
}
