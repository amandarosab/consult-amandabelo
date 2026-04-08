import { useState } from 'react';
import { Reveal } from './Reveal';

const SERVICES = [
  {
    id: 'linkedin',
    title: 'Otimização estratégica de LinkedIn',
    desc: 'Seu perfil vira uma ferramenta de atração. Reescrevo título, sobre, experiências e configurações com foco em recrutadores e algoritmo.',
    items: ['Título com palavras-chave estratégicas', "Reescrita do 'Sobre' com narrativa profissional", 'Experiências reescritas com foco em resultados', 'Configuração estratégica do perfil'],
    price: '110', delivery: '2–3 dias úteis', scope: 'Análise completa + Reescrita + Revisão', popular: true,
  },
  {
    id: 'curriculo',
    title: 'Otimização de currículo (Foco em ATS)',
    desc: 'Seu currículo passa pelos filtros automáticos e chega nas mãos de quem decide. Formato otimizado para software e para gente.',
    items: ['Formato otimizado para ATS e leitura humana', 'Inserção de palavras-chave estratégicas', 'Experiências reestruturadas com foco em impacto', 'Foco em resultados mensuráveis'],
    price: '115', delivery: '1–2 dias úteis', scope: 'Reformulação completa + Template profissional', popular: true,
  },
  {
    id: 'entrevista-comportamental',
    title: 'Preparação para entrevista comportamental',
    desc: 'Você aprende a responder com estratégia, comunicar seu valor com clareza e sair da entrevista sabendo que deu o seu melhor.',
    items: ['Simulação individual online', 'Técnicas de storytelling', 'Feedback direcionado para performance', 'Estratégias de comunicação eficaz'],
    price: '115', delivery: '1 sessão de 90min', scope: 'Simulação + Feedback + Material de apoio',
  },
  {
    id: 'entrevista-tecnica',
    title: 'Preparação para entrevista técnica',
    desc: 'Demonstre sua expertise com segurança. Sessão focada nos temas da sua área, com desafios reais e feedback técnico detalhado.',
    items: ['Sessão focada em temas da sua área', 'Simulação de desafios reais do mercado', 'Estratégias para comunicar conhecimento', 'Preparação para live coding'],
    price: '130', delivery: '1 sessão de 120min', scope: 'Simulação + Desafios práticos + Feedback técnico',
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-24 px-7" style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1120px] mx-auto">
        <Reveal>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] mb-5" style={{ color: 'var(--accent)' }}>
            Serviços
          </p>
          <h2 className="font-serif leading-[1.15] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--ink)' }}>
            O que eu posso fazer<br />por você
          </h2>
          <p className="font-sans text-[15px] leading-[1.7] mb-14 max-w-[440px]" style={{ color: 'var(--ink-muted)' }}>
            Cada serviço é entregue com a mesma atenção que eu daria se fosse o meu próprio processo seletivo.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {SERVICES.map((s, i) => {
            const isOpen = expanded === i;
            return (
              <Reveal key={s.id} delay={i * 0.06}>
                <div
                  className="cursor-pointer transition-all"
                  style={{
                    borderTop: '1px solid var(--border)',
                    padding: isOpen ? '32px 0 40px' : '28px 0',
                  }}
                  onClick={() => setExpanded(isOpen ? null : i)}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start gap-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-serif text-[22px] font-normal leading-[1.3]" style={{ color: 'var(--ink)' }}>
                          {s.title}
                        </h3>
                        {s.popular && (
                          <span
                            className="font-sans text-[9px] font-bold uppercase tracking-[0.12em] rounded-full px-2.5 py-0.5"
                            style={{ color: 'var(--accent)', border: '1px solid var(--accent)' }}
                          >
                            Popular
                          </span>
                        )}
                      </div>
                      {!isOpen && (
                        <p className="font-sans text-[13px] mt-1" style={{ color: 'var(--ink-muted)' }}>
                          a partir de R$ {s.price}
                        </p>
                      )}
                    </div>
                    <span
                      className="text-[22px] shrink-0 leading-none transition-transform duration-300"
                      style={{ color: 'var(--ink-muted)', transform: isOpen ? 'rotate(45deg)' : 'none' }}
                    >
                      +
                    </span>
                  </div>

                  {/* Expanded */}
                  {isOpen && (
                    <div className="mt-5 animate-fade-up">
                      <p className="font-sans text-[15px] leading-[1.7] mb-6 max-w-[540px]" style={{ color: 'var(--ink-light)' }}>
                        {s.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                        {s.items.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <span className="text-[13px] mt-0.5 shrink-0" style={{ color: 'var(--accent)' }}>✓</span>
                            <span className="font-sans text-[13px]" style={{ color: 'var(--ink-light)' }}>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-baseline gap-4 flex-wrap">
                        <p className="font-serif text-[36px] italic" style={{ color: 'var(--ink)' }}>
                          R${s.price}<span className="text-[16px] not-italic" style={{ color: 'var(--ink-muted)' }}>,00</span>
                        </p>
                        <p className="font-sans text-[12px]" style={{ color: 'var(--ink-muted)' }}>
                          {s.delivery} · {s.scope}
                        </p>
                      </div>

                      <a
                        href="https://wa.me/5511910623871"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-5 font-sans text-[13px] font-semibold text-white px-7 py-3 rounded-full no-underline transition-opacity"
                        style={{ background: 'var(--ink)' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Contratar serviço
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </section>
  );
}