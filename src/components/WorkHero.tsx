import React from 'react';
import Icon from './Icon';
import Chip from './Chip';

export default function WorkHero() {
  return (
    <section className="work-hero" id="inicio">
      <span className="work-hero__deco" />
      <div className="container">
        <div className="work-hero__inner reveal">
          <div style={{ marginTop: 22 }}>
          </div>
          <h1>
            Cadastre sua <span className="hl">candidatura</span>
          </h1>
          <div className="work-hero__script">La confiance à domicile</div>
          <p className="work-hero__lead">
            Preencha seus dados para que possamos conhecer melhor sua experiência, disponibilidade e
            os serviços que você realiza.
          </p>
        </div>
      </div>
    </section>
  );
}
