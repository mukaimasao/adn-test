import React from 'react';
import Icon from '@/components/ui/Icon';
import { TRUST_REASONS } from './WhyChooseUsSection.data';

export default function WhyChooseUsSection() {
  return (
    <section className="section relative isolate overflow-hidden bg-[var(--verde-floresta)] text-[#eaf4ec]" id="pourquoi-nous">
      <svg
        className="absolute -top-px inset-x-0 z-[2] block h-auto w-full text-[var(--creme)]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,0 L1440,0 L1440,30 C1200,68 960,68 720,46 C480,24 240,24 0,52 Z" />
      </svg>

      <span className="absolute inset-0 z-0 opacity-50 [background:radial-gradient(circle_at_14%_26%,color-mix(in_srgb,var(--verde-claro)_30%,transparent),transparent_42%),radial-gradient(circle_at_86%_78%,color-mix(in_srgb,var(--dourado)_24%,transparent),transparent_40%)]" />

      <div className="container relative z-[1]">
        <div className="grid grid-cols-1 items-start gap-[clamp(36px,5vw,64px)] py-[clamp(20px,3vw,40px)] min-[920px]:grid-cols-[.82fr_1.18fr] min-[920px]:gap-[clamp(48px,6vw,88px)]">
          <div className="reveal">
            <span className="eyebrow eyebrow--rule text-[var(--verde-claro)]">Pourquoi nous choisir</span>
            <h2 className="mt-[18px] text-[clamp(28px,4vw,44px)] font-bold text-white">
              De bonnes raisons de faire confiance à <span className="accent">ADN</span>
            </h2>
            <p className="mt-[18px] max-w-[40ch] text-[16.5px] text-[#c8e2cf]">
              Une équipe attentive à chaque étape, de votre première demande à l’organisation de la prestation.
            </p>
          </div>

          <div className="reveal flex flex-col">
            {TRUST_REASONS.map((reason) => (
              <div className="group grid grid-cols-[auto_1fr] items-start gap-[18px] border-t border-white/15 px-1 py-[clamp(20px,2.6vw,26px)] transition-[padding] last:border-b even:[&>span:first-child]:text-[var(--dourado)] hover:pl-2.5" key={reason.title}>
                <span className="shrink-0 text-[var(--verde-claro)]">
                  <Icon name={reason.icon} size={30} stroke={1.6} />
                </span>
                <span>
                  <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="mt-1.5 text-[14.5px] text-[#c8e2cf]">{reason.description}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <svg
        className="absolute -bottom-px inset-x-0 z-[2] block h-auto w-full text-[var(--creme)]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,80 L1440,80 L1440,40 C1200,8 960,8 720,30 C480,52 240,52 0,26 Z" />
      </svg>
    </section>
  );
}
