import React from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--verde-floresta)] text-[#dff0e3]" id="contact">
      <svg
        className="absolute -top-px inset-x-0 block h-auto w-full text-[var(--creme-2)]"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ opacity: 1, strokeWidth: '1px' }}
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,28 C1200,60 960,60 720,40 C480,20 240,20 0,46 Z"
        />
      </svg>

      <div className="container">
        <div className="relative z-[1] grid grid-cols-1 gap-[38px] pb-[clamp(40px,6vw,60px)] pt-[clamp(64px,8vw,96px)] min-[820px]:grid-cols-[1.3fr_1fr_1fr] min-[820px]:gap-14">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.jpeg"
              alt="ADN Titres-Services"
              height={46}
              width={120}
              className="h-[46px] w-auto rounded-[var(--r-sm)] bg-white px-3 py-[9px]"
            />
            <div className="mt-4 script text-[25px] text-[var(--verde-claro)]">La confiance à domicile</div>
            <p className="mt-3 max-w-[40ch] text-[14.5px] text-[#bfe0c8]">
              Un accompagnement de proximité, organisé dans le cadre des titres-services.
            </p>
          </div>

          

          {/* Horaires */}
          <div>
            <h4 className="mb-[18px] font-[var(--font-head)] text-[13px] font-semibold uppercase tracking-[.14em] text-white">Horaires</h4>
            <div className="flex flex-col gap-[15px]">
              <span className="flex items-start gap-3 text-[14.5px] text-[#cfe7d6] [&>svg]:mt-0.5 [&>svg]:shrink-0 [&>svg]:text-[var(--verde-claro)]">
                <Icon name="clock" size={18} />
                <span>
                  <b className="block font-[var(--font-head)] text-sm font-semibold text-white">Du lundi au vendredi</b>
                  <span className="text-[13px] text-[#a9cdb3]">De 9 h à 15 h</span>
                </span>
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-[18px] font-[var(--font-head)] text-[13px] font-semibold uppercase tracking-[.14em] text-white">Contact</h4>
            <div className="flex flex-col gap-[15px] [&_.contact-line]:flex [&_.contact-line]:items-start [&_.contact-line]:gap-3 [&_.contact-line]:text-[14.5px] [&_.contact-line]:text-[#cfe7d6] [&_.contact-line>svg]:mt-0.5 [&_.contact-line>svg]:shrink-0 [&_.contact-line>svg]:text-[var(--verde-claro)] [&_b]:block [&_b]:break-all [&_b]:font-[var(--font-head)] [&_b]:text-sm [&_b]:font-semibold [&_b]:text-white">
              <a href="tel:+32497761736" className="contact-line transition-colors hover:text-[var(--dourado)]">
                <Icon name="phone" size={18} />
                <span>
                  <b>+32 497 76 17 36</b>
                </span>
              </a>
              <a href="mailto:noely_nogueira@hotmail.com" className="contact-line transition-colors hover:text-[var(--dourado)]">
                <Icon name="mail" size={18} />
                <span>
                  <b>noely_nogueira@hotmail.com</b>
                </span>
              </a>
              <span className="contact-line" aria-disabled="true">
                <Icon name="instagram" size={18} />
                <span>
                  <b>Instagram</b>
                  <span>Bientôt disponible</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="relative z-[1] flex flex-col gap-3 border-t border-white/15 py-[22px] text-center text-[13px] text-[#bfe0c8] min-[820px]:flex-row min-[820px]:items-center min-[820px]:justify-between min-[820px]:text-left">
          <div className="flex flex-col gap-1">
            <span>
              © {new Date().getFullYear()} ADN Titres-Services. Tous droits réservés.
            </span>

            <span className="text-[11px] text-[#a9cdb3]">
              Certaines images présentées sur ce site ont été générées à l’aide de
              l’intelligence artificielle.
            </span>
          </div>

          <span className="script text-[17px] text-[var(--verde-claro)]">
            La confiance à domicile
          </span>
        </div>
      </div>
    </footer>
  );
}
