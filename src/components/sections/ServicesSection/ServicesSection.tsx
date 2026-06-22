import React from 'react';
import Icon from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from './ServicesSection.data';

export default function ServicesSection() {
  return (
    <section className="section relative bg-[linear-gradient(180deg,var(--creme)_0%,var(--creme-2)_50%,var(--creme)_100%)]" id="services">
      <div className="container">
        <div className="reveal flex flex-wrap items-end justify-between gap-5">
          <SectionHeading
            eyebrow="Nos services"
            title="Une aide adaptée à"
            accent="vos besoins"
          />
          <p className="sec-sub" style={{ marginTop: 0, maxWidth: '34ch' }}>
            Chaque prestation est organisée avec soin, proximité et confiance.
          </p>
        </div>

        <div className="reveal mt-[clamp(34px,5vw,52px)] grid grid-cols-1 border-t border-[var(--linha-2)] min-[760px]:grid-cols-2 min-[760px]:gap-x-[clamp(36px,5vw,72px)]">
          {SERVICES.map((service) => (
            <a
              className="group relative grid min-w-0 grid-cols-[auto_1fr_auto] items-start gap-[18px] border-b border-[var(--linha-2)] py-[clamp(22px,3vw,30px)] pl-[18px] pr-1.5 transition-[padding] before:absolute before:bottom-[22px] before:left-0 before:top-[22px] before:w-[2.5px] before:origin-top before:scale-y-0 before:rounded-sm before:bg-[var(--verde-medio)] before:transition-transform hover:pl-[26px] hover:before:scale-y-100"
              href="#intervention"
              key={service.title}
            >
              <span className="col-start-1 row-start-1 shrink-0 pt-px text-[var(--verde-medio)] transition-colors group-hover:text-[var(--verde-escuro)]">
                <Icon name={service.icon} size={28} />
              </span>
              <span className="col-start-2 min-w-0">
                <h3 className="break-words text-[19px] font-semibold">{service.title}</h3>
                <p className="mt-[7px] max-w-[42ch] text-[14.5px] text-[var(--texto-suave)]">{service.description}</p>
              </span>
              <span className="col-start-3 self-center text-[var(--linha-3)] transition-all group-hover:translate-x-[3px] group-hover:text-[var(--verde-medio)]">
                <Icon name="arrow" size={18} />
              </span>
            </a>
          ))}
        </div>

        <div className="reveal mt-[clamp(32px,4vw,44px)] flex flex-wrap items-center gap-x-[22px] gap-y-3.5 text-[15px] text-[var(--texto-suave)]">
          <p>Vous avez un besoin particulier ? Expliquez-nous votre situation.</p>
          <a className="link-ul" href="#intervention">
            Nous contacter <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
