import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import RevealController from '@/components/layout/RevealController';
import AboutSection from '@/components/sections/AboutSection';
import CareersInvitationSection from '@/components/sections/CareersInvitationSection';
import HeroSection from '@/components/sections/HeroSection';
import ServiceRequestSection from '@/components/sections/ServiceRequestSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';

export default function HomePage() {
  return (
    <>
      <RevealController />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ServiceRequestSection />
        <CareersInvitationSection />
      </main>
      <Footer />
    </>
  );
}
