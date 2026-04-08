import { Reveal } from './Reveal';

const POSTS = [
  { text: '3 erros que eliminam seu currículo antes de qualquer humano ler. Eu já vi isso acontecer centenas de vezes do outro lado da mesa...', likes: 142, comments: 38, date: '2 semanas' },
  { text: 'Seu LinkedIn não é um currículo online. É uma vitrine. E a maioria dos profissionais está usando como depósito de informação...', likes: 98, comments: 22, date: '3 semanas' },
  { text: 'Fiz uma simulação de entrevista com uma candidata que tinha 10 anos de experiência. Em 5 minutos percebi o problema que nenhum recrutador ia contar pra ela...', likes: 215, comments: 54, date: '1 mês' },
];

export default function LinkedInPosts() {
  return (
    <section className="py-24 px-7" style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[1120px] mx-auto">
        <Reveal>
          <div className="flex justify-between items-end mb-11 flex-wrap gap-4">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] mb-5" style={{ color: 'var(--accent)' }}>
                Conteúdo
              </p>
              <h2 className="font-serif leading-[1.15]" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--ink)' }}>
                Últimos posts no LinkedIn
              </h2>
            </div>
            <a
              href="https://linkedin.com/in/amandarbelo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[12px] font-semibold rounded-full px-6 py-2.5 no-underline flex items-center gap-2 transition-all"
              style={{ color: 'var(--ink)', border: '1.5px solid var(--ink)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--ink)">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Ver perfil
            </a>
          </div>
        </Reveal>

        <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-1" style={{ scrollSnapType: 'x mandatory' }}>
          {POSTS.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <a
                href="https://linkedin.com/in/amandarbelo"
                target="_blank"
                rel="noopener noreferrer"
                className="block min-w-[300px] max-w-[340px] flex-shrink-0 rounded-[10px] p-6 no-underline bg-white transition-shadow hover:shadow-md"
                style={{ scrollSnapAlign: 'start', border: '1px solid var(--border)' }}
              >
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-serif text-[13px] text-white italic"
                    style={{ background: 'var(--accent)' }}
                  >
                    A
                  </div>
                  <div>
                    <p className="font-sans text-[12px] font-semibold" style={{ color: 'var(--ink)' }}>Amanda Belo</p>
                    <p className="font-sans text-[10px]" style={{ color: 'var(--ink-muted)' }}>{p.date}</p>
                  </div>
                </div>

                {/* Text */}
                <p className="font-sans text-[14px] leading-[1.7] mb-4" style={{ color: 'var(--ink-light)' }}>
                  {p.text}
                </p>

                {/* Engagement */}
                <div className="flex gap-4 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  <span className="font-sans text-[11px]" style={{ color: 'var(--ink-muted)' }}>👍 {p.likes}</span>
                  <span className="font-sans text-[11px]" style={{ color: 'var(--ink-muted)' }}>💬 {p.comments}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}