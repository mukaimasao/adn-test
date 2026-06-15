'use client';

import { useReveal } from '@/lib/useReveal';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuemSomos from '@/components/QuemSomos';
import Servicos from '@/components/Servicos';
import PorQue from '@/components/PorQue';
import Contratar from '@/components/Contratar';
import TrabalharConvite from '@/components/TrabalharConvite';
import Footer from '@/components/Footer';

export default function HomePage() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <PorQue />
        <Contratar />
        <TrabalharConvite />
      </main>
      <Footer />
    </>
  );
}
