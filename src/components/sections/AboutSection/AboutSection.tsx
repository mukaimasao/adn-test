import React from 'react';
import Icon from '@/components/ui/Icon';
import Photo from '@/components/ui/Photo';
import SectionHeading from '@/components/ui/SectionHeading';
import { ABOUT_HIGHLIGHTS } from './AboutSection.data';

export default function AboutSection() {
  return (
    <section className="section relative" id="a-propos">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-[clamp(36px,5vw,68px)] min-[880px]:grid-cols-[.9fr_1.1fr]">
          <div className="reveal relative hidden min-[880px]:block">
            <div className="aspect-[4/4.5] overflow-hidden rounded-[var(--r-img)] rounded-br-[110px_56px] shadow-[var(--sh-img)]">
              <Photo src="/images/2.png" alt="Équipe ADN dans un intérieur accueillant" />
            </div>
          </div>

          <div className="min-w-0 [&_.sec-head]:mb-1">
            <SectionHeading
              eyebrow="À propos"
              title="Un soutien fiable pour"
              accent="votre quotidien"
            />

            <p className="reveal mt-5 text-[16.5px] text-[var(--texto-suave)]">
              ADN Titres-Services accompagne les familles qui souhaitent simplifier leur quotidien.
              Nous travaillons avec des professionnelles sélectionnées et suivies, dans une relation
              fondée sur le sérieux, la proximité et l’attention.
            </p>
            <p className="reveal mt-5 text-[16.5px] text-[var(--texto-suave)] [&_strong]:font-semibold [&_strong]:text-[var(--verde-escuro)]">
              En tant qu’entreprise <strong>agréée titres-services</strong>, nous organisons chaque
              prestation dans le cadre prévu par ce dispositif, pour nos clients comme pour nos aides-ménagères.
            </p>
            <div className="reveal mt-[30px] grid grid-cols-1 gap-x-7 gap-y-0 min-[521px]:grid-cols-2">
              {ABOUT_HIGHLIGHTS.map((highlight) => (
                <div className="flex items-center gap-3 border-t border-[var(--linha)] px-0.5 py-3.5 font-[var(--font-head)] text-[15px] font-medium [&_svg]:shrink-0 [&_svg]:text-[var(--verde-medio)]" key={highlight.label}>
                  <Icon name={highlight.icon} size={21} /> {highlight.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
