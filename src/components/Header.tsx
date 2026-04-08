import { useState, useEffect } from 'react';

interface HeaderProps {
  onAbout: () => void;
}

const links = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'contato', label: 'Contato' },
];

export default function Header({ onAbout }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    if (id === 'sobre') {
      onAbout();
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? 'rgba(252,250,245,.92)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        padding: scrolled ? '14px 0' : '22px 0',
      }}
    >
      <div className="max-w-[1120px] mx-auto px-7 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="no-underline flex items-center gap-2.5">
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L36 36H4L20 4Z" stroke="var(--accent)" strokeWidth="2.8" />
            <path d="M20 16L28 32H12L20 16Z" stroke="var(--accent)" strokeWidth="1.6" />
          </svg>
          <span className="font-serif text-[17px] text-ink">Amanda Belo</span>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop flex gap-7 items-center">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.id === 'sobre' ? undefined : `#${l.id}`}
              onClick={
                l.id === 'sobre'
                  ? (e) => {
                      e.preventDefault();
                      onAbout();
                    }
                  : undefined
              }
              className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted no-underline cursor-pointer hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn hidden bg-transparent border-none text-[22px] text-ink cursor-pointer p-1"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="bg-cream px-7 py-7 flex flex-col gap-5 border-t border-border">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.id === 'sobre' ? undefined : `#${l.id}`}
              onClick={() => handleClick(l.id)}
              className="font-sans text-[15px] font-medium text-ink no-underline cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}