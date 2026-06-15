import React from 'react';
import Image from 'next/image';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="ftr" id="contato">
      <svg
        className="ftr__curve"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ opacity: 1, strokeWidth: '1px' }}
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,28 C1200,60 960,60 720,40 C480,20 240,20 0,46 Z"
        />
      </svg>

      <div className="container">
        <div className="ftr__inner">
          {/* Brand */}
          <div className="ftr__brand">
            <Image
              src="/images/logo.png"
              alt="ADN Titres-Services"
              height={46}
              width={120}
              style={{ height: 100, width: 'auto' }}
            />
            <div className="ftr__tag">La confiance à domicile</div>
            <p className="ftr__desc">
              Serviços domésticos confiáveis, com proximidade e cuidado no dia a dia do seu lar.
            </p>
          </div>

          

          {/* Atendimento */}
          <div className="ftr__contact">
            <h4>Atendimento</h4>
            <div className="ftr__list">
              <span className="li">
                <Icon name="clock" size={18} />
                <span>
                  <b>Segunda a sexta</b>
                  <span>Das 8h às 18h</span>
                </span>
              </span>
            </div>
          </div>

          {/* Contato */}
          <div className="ftr__contact">
            <h4>Contato</h4>
            <div className="ftr__list">
              <a href="tel:+3232486173577" className="li">
                <Icon name="phone" size={18} />
                <span>
                  <b>(32) 486173577</b>
                </span>
              </a>
              <a href="mailto:noely_nogueira@hotmail.com" className="li">
                <Icon name="mail" size={18} />
                <span>
                  <b>noely_nogueira@hotmail.com</b>
                </span>
              </a>
              <span className="li">
                <Icon name="pin" size={18} />
                <span>
                  <b>Endereço</b>
                  <span>[Inserir endereço]</span>
                </span>
              </span>
              <a href="#" className="li">
                <Icon name="facebook" size={18} />
                <span>
                  <b>Facebook</b>
                  <span>Em breve</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="ftr__bottom">
          <span>© {new Date().getFullYear()} ADN Titres-Services. Todos os direitos reservados.</span>
          <span style={{ fontFamily: 'var(--font-script)', fontSize: 17, color: 'var(--verde-claro)' }}>
            La confiance à domicile
          </span>
        </div>
      </div>
    </footer>
  );
}
