import type { Metadata } from 'next';
import CareerApplicationForm from '@/components/forms/CareerApplicationForm';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import RevealController from '@/components/layout/RevealController';
import CareersAside from '@/components/sections/CareersAside';
import CareersHero from '@/components/sections/CareersHero';

export const metadata: Metadata = {
  title: 'Rejoignez notre équipe | ADN Titres-Services',
  description: 'Présentez votre candidature pour rejoindre l’équipe ADN Titres-Services.',
};

export default function CareersPage() {
  return (
    <>
      <RevealController />
      <Header base="/" />
      <main>
        <CareersHero />
        <section className="py-[clamp(44px,6vw,84px)]" aria-label="Formulaire de candidature">
          <div className="container">
            <div className="grid grid-cols-1 items-start gap-[clamp(28px,4vw,48px)] min-[980px]:grid-cols-[1fr_340px]">
              <CareerApplicationForm />
              <CareersAside />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
