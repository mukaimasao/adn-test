import React from 'react';
import Icon from './Icon';
import Photo from './Photo';
import SectionHead from './SectionHead';

const QS_HIGHLIGHTS = [
  { icon: 'badge', t: 'Empresa credenciada' },
  { icon: 'handshake', t: 'Atendimento próximo' },
  { icon: 'homeCheck', t: 'Serviços para o lar' },
  { icon: 'handsHeart', t: 'Confiança no dia a dia' },
];

export default function QuemSomos() {
  return (
    <section className="section qs" id="quem-somos">
      <div className="container">
        <div className="qs-grid">
          <div className="qs-media reveal">
            <div className="qs-photo">
              <Photo label="equipe / ambiente doméstico acolhedor" />
            </div>
          </div>

          <div className="qs-copy">
            <SectionHead
              eyebrow="Quem somos"
              title="Apoio confiável para"
              accent="o seu dia a dia"
            />

            <p className="qs-text reveal">
              A ADN Titres-Services nasceu para facilitar a rotina de famílias que precisam de apoio
              confiável em casa. Trabalhamos com profissionais selecionadas e acompanhadas, oferecendo
              serviços domésticos com seriedade, proximidade e cuidado.
            </p>
            <p className="qs-text reveal">
              Como empresa <strong>agréée titres-services</strong>, atuamos dentro de um modelo seguro e
              regulamentado, trazendo mais tranquilidade para clientes e colaboradoras.
            </p>
            <div className="qs-list reveal">
              {QS_HIGHLIGHTS.map((h) => (
                <div className="qs-li" key={h.t}>
                  <Icon name={h.icon} size={21} /> {h.t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
