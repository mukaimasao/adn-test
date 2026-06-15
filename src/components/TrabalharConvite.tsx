import React from 'react';
import Icon from './Icon';
import Button from './Button';
import Photo from './Photo';
import Chip from './Chip';

export default function TrabalharConvite() {
  return (
    <section className="section invite" id="trabalhar">
      <div className="container">
        <div className="invite-grid">
          <div className="invite-media reveal">
            <Photo label="profissional sorrindo / ambiente acolhedor" />
          </div>
          <div className="invite-copy reveal">
            <h2>
              Quer fazer parte da
              <br />
              nossa equipe?
            </h2>
            <p>
              Estamos sempre em busca de pessoas responsáveis, cuidadosas e comprometidas para
              oferecer um serviço de confiança às famílias atendidas pela ADN Titres-Services.
            </p>
            <div className="invite-cta">
              <Button variant="gold" size="lg" href="/trabalhar" icon="briefcase" iconRight="arrow">
                Cadastrar Candidatura
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
