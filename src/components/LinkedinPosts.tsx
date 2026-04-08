import { Reveal } from './Reveal';

const POSTS = [
  {
    activityId: '7436792920063528960',
    url: 'https://www.linkedin.com/posts/amandarbelo_fodebacksexistem-rh-dho-activity-7436792920063528960-8JS1',
  },
  {
    activityId: '7369383752776527873',
    url: 'https://www.linkedin.com/posts/amandarbelo_rh-dho-luto-activity-7369383752776527873-_2rE',
  },
  {
    activityId: '7371561849814867968',
    url: 'https://www.linkedin.com/posts/amandarbelo_rh-dho-gestaetodepessoas-activity-7371561849814867968-DsIS',
  },
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--ink)">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Ver perfil
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {POSTS.map((p, i) => (
            <Reveal key={p.activityId} delay={i * 0.08}>
              <div
                className="rounded-[10px] overflow-hidden bg-white"
                style={{ border: '1px solid var(--border)' }}
              >
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${p.activityId}`}
                  width="100%"
                  height="750"
                  frameBorder="0"
                  allowFullScreen
                  title={`LinkedIn post ${i + 1}`}
                  style={{ border: 'none' }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}