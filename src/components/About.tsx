import { useEffect } from 'react';

interface AboutProps {
  onClose: () => void;
}

export default function About({ onClose }: AboutProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] overflow-y-auto animate-fade-up"
      style={{ background: 'var(--cream)' }}
    >
      {/* Top bar */}
      <div
        className="sticky top-0 z-10 px-7 py-3.5 flex justify-between items-center"
        style={{
          background: 'rgba(252,250,245,.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--ink-muted)' }}>
          Sobre mim
        </span>
        <button
          onClick={onClose}
          className="w-[34px] h-[34px] rounded-full bg-transparent cursor-pointer text-[15px] flex items-center justify-center transition-colors"
          style={{ border: '1.5px solid var(--border)', color: 'var(--ink-light)' }}
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="max-w-[640px] mx-auto px-7 pt-16 pb-24">
        {/* Avatar */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center font-serif text-[32px] text-white italic mb-10"
          style={{ background: 'var(--accent)' }}
        >
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFVprX3ZRURVlH2vm1A4k5_i5iUpCIp2BRYzXefr-nxxc2Y-mKLUy-zsavhm6oXttIy2ATLYaMxN8GiL1Bm47-I0j1q30vv5BqxbXoyLenqDkO-F8arbfGGGR6StETQE1CMowRQr7Fd4GgkB1GBib0YsaDe1Jam38hpxjl-y4Uc-AjoDY_DlgsBEgFx8s/w604-h604/5.png" alt="Avatar" className="w-full h-full rounded-full object-cover" />
        </div>

        <h1
          className="font-serif leading-[1.15] mb-9"
          style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--ink)', letterSpacing: '-0.02em' }}
        >
          Impulsionando pessoas<br />desde 2021
        </h1>

        {[
          'Sou a Amanda, consultora de RH e gestão de carreira com mais de 5 anos de experiência em desenvolvimento humano e organizacional. Comecei minha trajetória em 2020, e desde então venho ajudando profissionais a se posicionarem melhor no mercado de trabalho.',
          'Já atuei como Business Partner, Analista de DHO e Recrutamento e Seleção para mais de 5 empresas! Também tenho experiência com implantantação de RH, criação de políticas, fluxos e planos de cargos e salários, bem como ciclo de desempenho, pesquisas e programas de D&I.',
          'Minha abordagem combina três áreas que geralmente aparecem separadas: estratégia de carreira, psicologia organizacional e marketing pessoal. Quando otimizo seu currículo ou preparo você para uma entrevista, estou olhando com os mesmos olhos de quem já analisou centenas de candidatos do outro lado da mesa.',
          'Tenho MBA em Liderança e Gestão de Pessoas, pós-graduação em Psicologia Organizacional e estou cursando Engenharia de Software, porque acredito que tecnologia e gente andam juntos.',
        ].map((p, i) => (
          <p key={i} className="font-sans text-[16px] leading-[1.85] mb-5" style={{ color: 'var(--ink-light)' }}>
            {p}
          </p>
        ))}

        {/* CTA */}
        <div className="mt-11">
          <a
            href="https://wa.me/5511910623871"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-[13px] font-semibold text-white px-8 py-3.5 rounded-full no-underline"
            style={{ background: 'var(--ink)' }}
          >
            Falar comigo no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}