'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { NAVIGATION_ITEMS } from './Header.data';

interface MobileNavigationProps {
  base: string;
}

export default function MobileNavigation({ base }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    // React 18 doesn't serialize the `inert` prop; set the DOM attribute directly.
    dialogWrapRef.current?.toggleAttribute('inert', !open);
    if (open) {
      closeRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        className="ml-auto grid h-12 w-12 place-items-center rounded-[var(--r-sm)] border border-[var(--linha-2)] bg-white text-[var(--verde-escuro)] transition-colors hover:border-[var(--verde-claro)] hover:bg-[var(--verde-wash)] min-[900px]:hidden"
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
      >
        <Icon name="menu" size={24} />
      </button>
      {mounted &&
        createPortal(
          <>
            <div
              className={`fixed inset-0 z-[70] bg-[rgba(20,40,28,.42)] backdrop-blur-[2px] transition-opacity duration-200 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
              onClick={() => setOpen(false)}
            />
            <div
              ref={dialogWrapRef}
              className={`pointer-events-none fixed inset-0 z-[80] overflow-hidden ${open ? 'pointer-events-auto' : ''}`}
              aria-hidden={!open}
            >
              <aside
                id="mobile-navigation"
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navigation"
                className={`absolute right-0 top-0 flex h-full w-[min(86vw,360px)] flex-col bg-[var(--creme)] p-[22px] shadow-[-20px_0_60px_-24px_rgba(20,60,30,.4)] transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <Image src="/images/logo.jpeg" alt="ADN Titres-Services" height={40} width={100} style={{ height: 40, width: 'auto' }} />
                  <button ref={closeRef} className="grid h-11 w-11 place-items-center rounded-[var(--r-sm)] border border-[var(--linha-2)] bg-white text-[var(--grafite)]" aria-label="Fermer le menu" onClick={() => setOpen(false)}>
                    <Icon name="x" size={20} />
                  </button>
                </div>
                <nav className="my-[14px] flex flex-col" aria-label="Navigation mobile">
                  {NAVIGATION_ITEMS.map((item) => (
                    <a key={item.href} href={base + item.href} onClick={() => setOpen(false)} className="flex items-center border-b border-[var(--linha)] px-1 py-[15px] font-[var(--font-head)] text-lg font-medium text-[var(--grafite)] transition-all hover:pl-2.5 hover:text-[var(--verde-escuro)]">
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-3 pt-4">
                  <Button variant="primary" size="lg" block href={base + '#intervention'} iconRight="arrow" onClick={() => setOpen(false)}>
                    Je deviens client
                  </Button>
                  <Button variant="ghost" size="lg" block href="/careers" icon="briefcase">
                    Le postule équipe
                  </Button>
                </div>
              </aside>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}
