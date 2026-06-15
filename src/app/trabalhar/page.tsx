'use client';

import type { Metadata } from 'next';
import { useReveal } from '@/lib/useReveal';
import Header from '@/components/Header';
import WorkHero from '@/components/WorkHero';
import WorkForm from '@/components/WorkForm';
import WorkAside from '@/components/WorkAside';
import Footer from '@/components/Footer';

export default function TrabalharPage() {
  useReveal();

  return (
    <>
      <Header base="/" />
      <main>
        <WorkHero />
        <section className="work-main">
          <div className="container">
            <div className="work-grid">
              <WorkForm />
              <WorkAside />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
