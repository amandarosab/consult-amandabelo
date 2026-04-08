import { useRef } from 'react';
import { Reveal } from './Reveal';

const POSTS = [
  {
    id: '7436792920063528960',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQHO_sCMm3sh_A/feedshare-shrink_800/B4DZzQUnaPIgAc-/0/1773021591525?e=1777507200&v=beta&t=7BzHydxQlguIXRYWEUi3w8zStv1E0bietAM78QOSgyo',
    title: '5 conselhos de carreira que eu queria ter recebido no primeiro emprego',
    excerpt:
      'Resumo sobre networking, leitura de feedbacks, documentação de entregas e decisões de carreira.',
    tag: '#rh #DHO #gestãoDePessoas #fodebacksexistem',
    url: 'https://www.linkedin.com/posts/amandarbelo_fodebacksexistem-rh-dho-activity-7436792920063528960-8JS1',
  },
  {
    id: '7369383752776527873',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQHFqIYc1dXNhg/feedshare-shrink_1280/B4DZj483jOIgAw-/0/1756523363476?e=1777507200&v=beta&t=s75NNk5GBX6nk0NHXCQKMqwGYAP2uT5984Oq3GuCgbY',
    title: 'Nem todo luto é visível: o impacto disso no trabalho',
    excerpt:
      'Reflexão sobre perdas silenciosas, saúde emocional e como lideranças podem criar ambientes mais humanos e seguros.',
    tag: '#rh #dho #luto #saúdeemocional #gestãoDePessoas',
    url: 'https://www.linkedin.com/posts/amandarbelo_rh-dho-luto-activity-7369383752776527873-_2rE',
  },
  {
    id: '7371561849814867968',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQGBXoosUsKVww/feedshare-shrink_800/B4DZkz0_4yIcAk-/0/1757511156202?e=1777507200&v=beta&t=Uyk8WdIsZxoLFFXD4r_X4ZYloSmQYWW3O2gB_mCM9Nw',
    title: 'Produtividade não é linear: um alerta sobre cultura de pressão',
    excerpt:
      'Um recorte sobre como a desconfiança e o excesso de controle afetam o clima e produtividade.',
    tag: '#rh #dho #gestãoDePessoas #treta #bancolaranjinha',
    url: 'https://www.linkedin.com/posts/amandarbelo_rh-dho-gestaetodepessoas-activity-7371561849814867968-DsIS',
  },
];

export default function LinkedInPosts() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollPosts = (direction: 'left' | 'right') => {
    const container = carouselRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth ?? 360;
    const gap = 24;
    const delta = direction === 'left' ? -(cardWidth + gap) : cardWidth + gap;

    container.scrollBy({ left: delta, behavior: 'smooth' });
  };

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
                Acompanhe meus posts no LinkedIn
              </h2>
            </div>
            <a
              href="https://www.linkedin.com/in/amandarbelo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[12px] font-semibold rounded-full px-6 py-2.5 no-underline flex items-center gap-2 transition-all"
              style={{ color: 'var(--ink)', border: '1.5px solid var(--ink)' }}
            >
              <svg width="14" height="24" viewBox="0 0 24 24" fill="var(--ink)">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Ver perfil
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <div className="flex justify-end gap-2 mb-4">
              <button
                onClick={() => scrollPosts('left')}
                aria-label="Posts anteriores"
                className="w-10 h-10 rounded-full bg-transparent cursor-pointer transition-colors"
                style={{ border: '1.5px solid var(--border)', color: 'var(--ink)' }}
              >
                ←
              </button>
              <button
                onClick={() => scrollPosts('right')}
                aria-label="Próximos posts"
                className="w-10 h-10 rounded-full bg-transparent cursor-pointer transition-colors"
                style={{ border: '1.5px solid var(--border)', color: 'var(--ink)' }}
              >
                →
              </button>
            </div>

            <div
              ref={carouselRef}
              className="max-w-[1120px] mx-auto flex gap-6 overflow-x-auto hide-scrollbar pb-2"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {POSTS.map((p) => (
                <article
                  key={p.id}
                  className="w-[88vw] sm:w-[420px] md:w-[460px] lg:w-[500px] shrink-0 rounded-[14px] bg-white shadow-sm p-6"
                  style={{ border: '1px solid var(--border)', scrollSnapAlign: 'start' }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-[190px] object-cover rounded-[10px] mb-4"
                    loading="lazy"
                  />
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] mb-3" style={{ color: 'var(--ink-muted)' }}>
                    LinkedIn
                  </p>
                  <h3 className="font-serif text-[28px] leading-[1.15] mb-3" style={{ color: 'var(--ink)' }}>
                    {p.title}
                  </h3>
                  <p className="font-sans text-[16px] leading-[1.7] mb-5" style={{ color: 'var(--ink-light)' }}>
                    {p.excerpt}
                  </p>
                  <p className="font-sans text-[12px] mb-6" style={{ color: 'var(--accent)' }}>
                    {p.tag}
                  </p>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold rounded-full px-5 py-2.5 no-underline"
                    style={{ color: 'var(--ink)', border: '1.5px solid var(--ink)' }}
                  >
                    Ler post completo
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>

            <p className="font-sans text-[12px] text-center mt-4" style={{ color: 'var(--ink-muted)' }}>
              Prévia dos posts, clique para abrir no LinkedIn.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}