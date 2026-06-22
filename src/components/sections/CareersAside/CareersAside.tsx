import React from 'react';
import Icon from '@/components/ui/Icon';

export default function CareersAside() {
  return (
    <aside className="reveal flex flex-col gap-[18px] min-[980px]:sticky min-[980px]:top-[100px]">
      <div className="relative overflow-hidden rounded-[var(--r-img)] bg-[var(--verde-floresta)] p-7 text-[#eafaee] shadow-[var(--sh-md)]">
        <div className="script mb-1.5 block text-[27px] leading-[1.15] text-[var(--verde-claro)]">La confiance à domicile</div>
        <h3 className="mt-1.5 text-[21px] font-semibold text-white">Un métier qui compte au quotidien</h3>
        <p className="mt-3 text-[14.5px] text-[#c7e6d0]">Rejoignez une équipe humaine qui reconnaît votre travail et vous accompagne.</p>
        <div className="mt-[22px] flex flex-col [&_.career-benefit]:flex [&_.career-benefit]:items-start [&_.career-benefit]:gap-[13px] [&_.career-benefit]:border-t [&_.career-benefit]:border-white/15 [&_.career-benefit]:py-[13px] [&_.career-benefit]:text-[14.5px]">
          <div className="career-benefit">
            <span className="mt-px inline-flex shrink-0 text-[var(--dourado)]"><Icon name="heart" size={18} /></span>
            <span>Un environnement accueillant et respectueux.</span>
          </div>
          <div className="career-benefit">
            <span className="mt-px inline-flex shrink-0 text-[var(--verde-claro)]"><Icon name="grad" size={18} /></span>
            <span>Une formation et un accompagnement personnalisés.</span>
          </div>
          <div className="career-benefit">
            <span className="mt-px inline-flex shrink-0 text-[var(--dourado)]"><Icon name="calClock" size={18} /></span>
            <span>Une organisation attentive à vos disponibilités.</span>
          </div>
          <div className="career-benefit">
            <span className="mt-px inline-flex shrink-0 text-[var(--verde-claro)]"><Icon name="pin" size={18} /></span>
            <span>Des prestations organisées près de chez vous.</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
