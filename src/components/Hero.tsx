import { Reveal } from './Reveal';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="grain relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      <div className="max-w-[1120px] mx-auto px-7 pt-36 pb-24 relative w-full">
        <Reveal>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] mb-7" style={{ color: 'var(--accent)' }}>
            Consultoria de RH & Gestão de Carreira
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="font-serif font-normal leading-[1.05] mb-8 max-w-[680px]" style={{ fontSize: 'clamp(42px, 7vw, 76px)', color: 'var(--ink)', letterSpacing: '-0.025em' }}>
            Sua carreira merece{' '}
            <span className="italic" style={{ color: 'var(--accent)' }}>estratégia</span>,
            <br />não sorte.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="font-sans text-[16px] leading-[1.75] max-w-[460px] mb-11" style={{ color: 'var(--ink-light)' }}>
            Sou a Amanda, consultora de RH com MBA em Liderança e pós em Psicologia Organizacional. Já ajudei mais de 100 profissionais a conquistarem as posições que merecem.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="flex gap-3.5 flex-wrap items-center">
            <a
              href="#servicos"
              className="font-sans text-[13px] font-semibold text-white px-8 py-3.5 rounded-full no-underline tracking-wide transition-all"
              style={{ background: 'var(--ink)' }}
            >
              Ver serviços
            </a>
            <a
              href="https://wa.me/5511910623871"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[13px] font-medium px-8 py-3.5 rounded-full no-underline tracking-wide transition-all bg-transparent"
              style={{ color: 'var(--ink)', border: '1.5px solid var(--border)' }}
            >
              Falar no WhatsApp →
            </a>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.32}>
          <div className="mt-20 flex flex-wrap">
            {[
              { num: '100+', label: 'profissionais atendidos' },
              { num: '95%', label: 'alcançaram melhores posições' },
              { num: '5+', label: 'anos em gestão de pessoas' },
            ].map((s, i) => (
              <div
                key={s.label}
                className="py-6 pr-9"
                style={{
                  borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
                  paddingLeft: i > 0 ? '36px' : '0',
                }}
              >
                <p className="font-serif text-[38px] italic leading-none mb-1.5" style={{ color: 'var(--ink)' }}>
                  {s.num}
                </p>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--ink-muted)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}