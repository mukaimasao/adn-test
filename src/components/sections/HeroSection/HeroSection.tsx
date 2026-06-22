import React from 'react';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import Photo from '@/components/ui/Photo';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--creme)]" id="accueil">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <span className="absolute -right-[140px] -top-[180px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_35%_35%,var(--verde-wash-2),transparent_68%)] opacity-55 blur-[8px]" />
        <span className="absolute -bottom-[160px] -left-[160px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_60%_40%,var(--dourado-wash),transparent_66%)] opacity-55 blur-[8px]" />
      </div>
      <div className="container">
        <div className="relative z-[2] grid grid-cols-1 items-center gap-[clamp(36px,5vw,60px)] pb-[clamp(70px,9vw,130px)] pt-[clamp(44px,7vw,90px)] min-[860px]:grid-cols-[1.06fr_.94fr]">
          {/* TEXT */}
          <div className="reveal min-w-0">
            <span className="eyebrow eyebrow--rule">
              <Icon name="leaf" size={16} /> Votre agence titres-services
            </span>
            <h1 className="mt-[22px] break-words text-[clamp(30px,5.6vw,56px)] font-bold tracking-[-.022em]">
              Votre intérieur entre de bonnes mains, avec{' '}
              <span className="relative whitespace-normal text-[var(--verde-escuro)] sm:whitespace-nowrap">
                confiance
              </span>
              {' '}et professionnalisme.
            </h1>
            <div className="script my-[10px] mb-5 text-[clamp(30px,5vw,44px)]">La confiance à domicile</div>
            <p className="max-w-[50ch] text-[clamp(16px,2vw,19px)] text-[var(--texto-suave)]">
              Une aide de proximité pour faciliter votre quotidien, assurée par des professionnelles
              sélectionnées et accompagnées par notre équipe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5 [&_.btn]:w-full sm:[&_.btn]:w-auto min-[860px]:[&_.btn]:shrink-0">
              <Button variant="primary" size="lg" href="#intervention" iconRight="arrow" className="whitespace-normal">
                Demander une intervention
              </Button>
              <Button variant="gold" size="lg" href="/careers" icon="briefcase" className="whitespace-normal">
                Rejoindre notre équipe
              </Button>
            </div>
          </div>

          {/* MEDIA */}
          <div className="reveal relative">
            <div className="aspect-[4/4.5] w-full overflow-hidden rounded-[var(--r-img)] rounded-t-[120px_60px] shadow-[var(--sh-img)]">
              <Photo label="famille accompagnée par une aide-ménagère" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
