import React from 'react';
import Icon from './Icon';
import Button from './Button';
import Photo from './Photo';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__deco">
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
      </div>
      <div className="container">
        <div className="hero__grid">
          {/* TEXT */}
          <div className="hero__copy reveal">
            <span className="eyebrow eyebrow--rule">
              <Icon name="leaf" size={16} /> Serviços domésticos · Titres-services
            </span>
            <h1 className="hero__title" style={{ marginTop: 22 }}>
              Cuidamos do seu lar com{' '}
              <span className="hl">
                confiança
              </span>
              , carinho e profissionalismo.
            </h1>
            <div className="hero__script script">La confiance à domicile</div>
            <p className="hero__lead">
              Apoio doméstico próximo e cuidadoso para quem busca praticidade, segurança e
              qualidade no dia a dia — com profissionais selecionadas e acompanhadas.
            </p>
            <div className="hero__cta">
              <Button variant="primary" size="lg" href="#contratar" iconRight="arrow">
                Quero Contratar
              </Button>
              <Button variant="gold" size="lg" href="/trabalhar" icon="briefcase">
                Quero Trabalhar
              </Button>
            </div>
          </div>

          {/* MEDIA */}
          <div className="hero__media reveal">
            <div className="hero__photo">
              <Photo label="família / profissional em ambiente acolhedor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
