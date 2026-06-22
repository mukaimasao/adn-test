import Image from 'next/image';
import Button from '@/components/ui/Button';
import { NAVIGATION_ITEMS } from './Header.data';
import MobileNavigation from './MobileNavigation';

interface HeaderProps {
  base?: string;
}

export default function Header({ base = '' }: HeaderProps) {
  return (
    <header className="sticky top-0 z-[60] border-b border-[var(--linha)] bg-[color-mix(in_srgb,var(--creme)_86%,transparent)] backdrop-blur-[12px] backdrop-saturate-[140%]">
      <div className="container">
        <div className="flex h-[78px] items-center gap-[18px]">
          <a href={base || '/'} className="flex shrink-0 items-center" aria-label="ADN Titres-Services — accueil">
            <Image src="/images/logo.png" alt="ADN Titres-Services" height={46} width={120} style={{ height: 46, width: 'auto' }} />
          </a>
          <nav className="ml-[22px] hidden items-center gap-[26px] min-[900px]:flex" aria-label="Navigation principale">
            {NAVIGATION_ITEMS.map((item) => (
              <a key={item.href} href={base + item.href} className="relative whitespace-nowrap px-px py-[6px] font-[var(--font-head)] text-[15px] font-medium text-[var(--grafite)] transition-colors after:absolute after:-bottom-0.5 after:inset-x-0 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-[var(--dourado)] after:transition-transform hover:text-[var(--verde-escuro)] hover:after:scale-x-100">{item.label}</a>
            ))}
          </nav>
          <div data-header-actions className="ml-auto hidden items-center gap-3 min-[1440px]:flex">
            <Button variant="ghost" href="/careers" icon="briefcase">Rejoindre notre équipe</Button>
            <Button variant="primary" href={base + '#intervention'} iconRight="arrow">Demander une intervention</Button>
          </div>
          <MobileNavigation base={base} />
        </div>
      </div>
    </header>
  );
}
