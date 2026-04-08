import { Reveal } from './Reveal';

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-7" style={{ background: 'var(--ink)' }}>
      <div className="max-w-[680px] mx-auto text-center">
        <Reveal>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] mb-5" style={{ color: 'var(--accent)' }}>
            Contato
          </p>
          <h2 className="font-serif leading-[1.15] text-white mb-5" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
            Vamos conversar sobre<br />a sua carreira?
          </h2>
          <p className="font-sans text-[15px] leading-[1.7] max-w-[420px] mx-auto mb-10" style={{ color: 'rgba(255,255,255,.5)' }}>
            Me chama no WhatsApp ou manda um e-mail. Respondo em até 2h!
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex gap-3.5 justify-center flex-wrap mb-10">
            <a
              href="https://wa.me/5511910623871"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[13px] font-semibold px-8 py-3.5 rounded-full no-underline flex items-center gap-2"
              style={{ color: 'var(--ink)', background: '#10b981' }}
            >
              <span className="text-[16px]">💬</span> WhatsApp
            </a>
            <a
              href="mailto:amandabelo.contato@outlook.com"
              className="font-sans text-[13px] font-medium text-white px-8 py-3.5 rounded-full no-underline"
              style={{ border: '1.5px solid rgba(255,255,255,.15)' }}
            >
              amandabelo.contato@outlook.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="flex gap-3 justify-center">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/amandarbelo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-[42px] h-[42px] rounded-full flex items-center justify-center no-underline transition-colors"
              style={{ border: '1.5px solid rgba(255,255,255,.1)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,.4)">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/consult.amandabelo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-[42px] h-[42px] rounded-full flex items-center justify-center no-underline transition-colors"
              style={{ border: '1.5px solid rgba(255,255,255,.1)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="rgba(255,255,255,.4)" stroke="none" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:amandabelo.contato@outlook.com"
              aria-label="E-mail"
              className="w-[42px] h-[42px] rounded-full flex items-center justify-center no-underline transition-colors"
              style={{ border: '1.5px solid rgba(255,255,255,.1)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}