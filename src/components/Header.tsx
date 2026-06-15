'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import Button from './Button';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Por que nós', href: '#por-que' },
  { label: 'Contato', href: '#contato' },
];

interface HeaderProps {
  base?: string;
}

export default function Header({ base = '' }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="hdr">
        <div className="container">
          <div className="hdr__bar">
            <a href={base || '/'} className="hdr__logo" aria-label="ADN Titres-Services — início">
              <Image src="/images/logo.png" alt="ADN Titres-Services" height={46} width={120} style={{ height: 46, width: 'auto' }} />
            </a>
            <nav className="hdr__nav" aria-label="Principal">
              {NAV.map((n) => (
                <a key={n.href} href={base + n.href}>
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="hdr__actions">
              <Button variant="ghost" href="/trabalhar" icon="briefcase">
                Quero Trabalhar
              </Button>
              <Button variant="primary" href={base + '#contratar'} iconRight="arrow">
                Quero Contratar
              </Button>
            </div>
            <button
              className="hdr__burger"
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mm__overlay${open ? ' open' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile panel */}
      <aside className={`mm__panel${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mm__top">
          <Image src="/images/logo.png" alt="ADN Titres-Services" height={40} width={100} style={{ height: 40, width: 'auto' }} />
          <button className="mm__close" aria-label="Fechar menu" onClick={() => setOpen(false)}>
            <Icon name="x" size={20} />
          </button>
        </div>
        <nav className="mm__links">
          {NAV.map((n) => (
            <a key={n.href} href={base + n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="mm__cta">
          <Button
            variant="primary"
            size="lg"
            block
            href={base + '#contratar'}
            iconRight="arrow"
            onClick={() => setOpen(false)}
          >
            Quero Contratar
          </Button>
          <Button variant="ghost" size="lg" block href="/trabalhar" icon="briefcase">
            Quero Trabalhar
          </Button>
        </div>
      </aside>
    </>
  );
}
