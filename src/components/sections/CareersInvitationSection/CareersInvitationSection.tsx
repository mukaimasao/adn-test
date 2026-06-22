import React from 'react';
import Button from '@/components/ui/Button';
import Photo from '@/components/ui/Photo';

export default function CareersInvitationSection() {
  return (
    <section className="section relative overflow-hidden bg-[var(--creme-2)]" id="careers">
      <div className="container">
        <div className="grid grid-cols-1 items-end gap-[clamp(30px,4vw,52px)] min-[900px]:grid-cols-[.95fr_1.05fr]">
          <div className="reveal relative aspect-[4/3.2] overflow-hidden rounded-[var(--r-img)] rounded-tl-[100px_52px] shadow-[var(--sh-img)]">
            <Photo label="aide-ménagère souriante dans un cadre accueillant" />
          </div>
          <div className="reveal min-w-0">
            <h2 className="mt-3.5 text-[clamp(28px,3.6vw,42px)] font-bold">
              Envie de rejoindre
              <br />
              notre équipe ?
            </h2>
            <p className="mt-[18px] max-w-[46ch] text-[16.5px] text-[var(--texto-suave)]">
              Nous recherchons des personnes responsables, attentives et engagées pour accompagner
              les familles suivies par ADN Titres-Services.
            </p>
            <div className="mt-[30px]">
              <Button variant="gold" size="lg" href="/careers" icon="briefcase" iconRight="arrow" className="max-w-full whitespace-normal">
                Envoyer ma candidature
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
