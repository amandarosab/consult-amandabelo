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
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFVprX3ZRURVlH2vm1A4k5_i5iUpCIp2BRYzXefr-nxxc2Y-mKLUy-zsavhm6oXttIy2ATLYaMxN8GiL1Bm47-I0j1q30vv5BqxbXoyLenqDkO-F8arbfGGGR6StETQE1CMowRQr7Fd4GgkB1GBib0YsaDe1Jam38hpxjl-y4Uc-AjoDY_DlgsBEgFx8s/w604-h604/5.png"
          alt="Amanda Belo"
          className="w-14 h-14 rounded-full shrink-0 object-cover"
        />

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