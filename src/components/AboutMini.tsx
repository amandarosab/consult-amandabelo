interface AboutMiniProps {
  onOpen: () => void;
}

export default function AboutMini({ onOpen }: AboutMiniProps) {
  return (
    <section
      className="py-12 px-7"
      style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-[1120px] mx-auto flex items-center gap-6 flex-wrap">
        <div
          className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center font-serif text-[22px] text-white italic"
          style={{ background: 'var(--accent)' }}
        >
          A
        </div>

        <p className="font-sans text-[15px] leading-[1.7] flex-1 min-w-[300px]" style={{ color: 'var(--ink-light)' }}>
          Consultora de RH com mais de 5 anos preparando profissionais para conquistarem as posições que merecem. Estratégia de carreira, psicologia organizacional e marketing pessoal em uma abordagem só.
        </p>

        <button
          onClick={onOpen}
          className="font-sans text-[12px] font-semibold tracking-wide rounded-full px-6 py-2.5 cursor-pointer bg-transparent whitespace-nowrap transition-all"
          style={{ color: 'var(--accent)', border: '1.5px solid var(--accent)' }}
        >
          Minha história →
        </button>
      </div>
    </section>
  );
}