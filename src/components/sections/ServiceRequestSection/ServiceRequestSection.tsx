import ServiceRequestForm from '@/components/forms/ServiceRequestForm';
import Icon from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ServiceRequestSection() {
  return (
    <section className="section relative" id="intervention">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-[clamp(30px,4vw,56px)] min-[940px]:grid-cols-[.82fr_1.18fr] min-[940px]:gap-[clamp(48px,5vw,80px)]">
          <div className="reveal min-w-0 min-[940px]:sticky min-[940px]:top-[100px] [&_.sec-head]:max-w-none">
            <SectionHeading
              eyebrow="Votre demande"
              title="Demandez une"
              accent="intervention"
              sub="Indiquez-nous vos besoins et vos disponibilités. Notre équipe vous contactera afin d’organiser la prestation dans le cadre des titres-services."
            />
            <div className="mt-[30px] border-t border-[var(--linha)] pt-[26px]">
              <span className="script block text-[30px]">La confiance à domicile</span>
              <p className="mt-2 max-w-[34ch] text-[14.5px] text-[var(--texto-suave)]">Votre intérieur est accompagné avec attention et professionnalisme.</p>
            </div>
            <a className="mt-[26px] inline-flex items-center gap-[11px] font-[var(--font-head)] text-base font-semibold text-[var(--verde-escuro)] [&_svg]:text-[var(--verde-medio)]" href="tel:+32486173577">
              <Icon name="phone" size={20} /> +32 486 17 35 77
            </a>
          </div>
          <ServiceRequestForm />
        </div>
      </div>
    </section>
  );
}
