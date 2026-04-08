import { useState, useEffect, useRef } from 'react';
import { Reveal } from './Reveal';

const TESTIMONIALS = [
  {
    name: 'Shaymon Alvarez',
    role: 'Desenvolvedor de software embarcado',
    company: 'Stellantis',
    text: 'Profissional focada e assertiva sempre em busca da excelência em seus trabalhos. Recomendo fortemente seus serviços!',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEkBqiM4yROwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727722100798?e=1776297600&v=beta&t=eCRvZkiYIOeJs2-nty6zR7msYJ5Igruzg0nkzIvZXFg',
  },
  {
    name: 'Julis Araujo',
    role: 'Engenheiro de software',
    company: 'Bcodex',
    text: 'O trabalho da Amanda me deu resultado imediato. No dia seguinte aos ajustes dela em meu LinkedIn já comecei a receber novas propostas (inclusive internacionais). Valeu a pena demais!',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQGH34NrzHxpPw/profile-displayphoto-scale_400_400/B4DZi_h73bH0Ag-/0/1755560001560?e=1776297600&v=beta&t=R2uSuxFmhorf7u53ymheY-6ypm158hHcVG457yd_Bro',
  },
  {
    name: 'Gabriely Rodrigues',
    role: 'Advogada',
    company: 'Ibiaçu Loteamentos',
    text: 'A Amanda demonstra expertise em sua área de atuação, além de ser extremamente simpática e profissional. O trabalho que ela fez com o meu Linkedin foi incrível. Super recomendo!',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEjD2gGw4rWrw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718255222931?e=1776297600&v=beta&t=10YlF7v0Dww9xCB59JUVWrpsDzLcow5-oR-fdGfZCpU',
  },
  {
    name: 'Monik Rangel',
    role: 'Product manager',
    company: 'Digix',
    text: 'Amanda foi incrível, trouxe uma análise completa que me ajudou a desenvolver meu case e ir para entrevista muito mais preparada! Já indiquei pra várias amigas',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFL6DcqSrVt6w/profile-displayphoto-shrink_400_400/B4DZVi8I1HGcAg-/0/1741121688023?e=1776297600&v=beta&t=lbtRCY4uNGk1RmfcwxWP38JpKHp3jH0qPrPPXnTv5mg',
  },
  {
    name: 'Jackson Miranda',
    role: 'Especialista em infraestrutura e TI',
    company: 'Sonda',
    text: 'As sugestões fizeram total sentido, melhorias práticas para deixar meu perfil mais estratégico e atrativo. Agradeço pelo cuidado e pela qualidade do seu trabalho!',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQHa1inZ3PYi9g/profile-displayphoto-scale_400_400/B4DZnqO8TBGQAg-/0/1760571410249?e=1776297600&v=beta&t=X9Ll3mSNCbdFUjYFC5q4_h7AVNenCiGMLhHrmQDGu1I',
  },
  {
    name: 'Gilcllys Costa',
    role: 'Engenheiro de software',
    company: 'John Deere',
    text: 'Responde rapidamente e sempre preocupada com o cliente perguntando se ele quer mais alguma alteração. Entregou tudo o que prometeu. Super indico o serviço dela!',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQESaVVHVwQI-Q/profile-displayphoto-shrink_400_400/B4DZUbHJn6HIAg-/0/1739916614776?e=1776297600&v=beta&t=w-jZAv0arq2hUgPq-DH5GtcFCT5unFtwk24-4WRFx8s',
  },
  {
    name: 'Yasmin Bueno',
    role: 'Executiva de vendas',
    company: 'GL Events',
    text: 'Estou grata por toda a atenção durante a prestação de serviços da Amanda, ela demonstrou muito conhecimento e domínio no assunto, e seus serviços já mostraram resultados positivos!',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQHlUsKdULyyyA/profile-displayphoto-scale_400_400/B4DZld37K2JQAg-/0/1758216567134?e=1776297600&v=beta&t=SaUqU0URTx3oZPy7bLw5Zm_z59ky9JFGTIsjpcoE27M',
  },
  {
    name: 'Pedro Brantis',
    role: 'Engenheiro QA',
    company: 'FPFtech',
    text: 'O trabalho dela é ágil e eficaz, tive retornos muito rápido com seus serviços',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQGSOxYo4GoLhQ/profile-displayphoto-shrink_400_400/B4DZcU2HwUHMAg-/0/1748401421872?e=1776297600&v=beta&t=toIiohfuq4yiGdcRrqj7yUIvtK51sBH_gOFklro9mGk',
  },
  {
    name: 'Carlos Eduardo Fiuza',
    role: 'Engenheiro de software',
    company: 'Bcodex',
    text: 'Atendimento profissional e dedicado, após aplicação das dicas o resultado foi quase imediato!',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQG_h2-r2IyZcQ/profile-displayphoto-scale_400_400/B4DZzzavkmIkAg-/0/1773610401886?e=1776297600&v=beta&t=xKXq4nNirBOnkbbTEn7nM96xxj-MbrIY0uC1OUqTij0',
  },
  {
    name: 'Samuel Silva',
    role: 'Engenheiro de dados',
    company: 'INDT',
    text: 'Muito profissional e competente. O que ela fez no meu perfil me ajudou a encontrar minha vaga.',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQEW2Vm3zh-qnA/profile-displayphoto-scale_400_400/B4DZh7Lr5gH8Ag-/0/1754413318349?e=1776297600&v=beta&t=R6ylGlnfvLT_am9vn5vOkpCOSlLTuqNc8-KDN678X5w',
  },
  {
    name: 'Cauet Delfim',
    role: 'Técnico em manutenção de máquinas',
    company: 'SWM International',
    text: 'Foi excelente, ótimo trabalho que ela fez no meu perfil',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFVgUNVMsMeJg/profile-displayphoto-scale_400_400/B4DZgoc5eBHsAg-/0/1753025321577?e=1776297600&v=beta&t=m3K3f551berdebRvNzMdsIq9yP4Bj0gHoWltDbj1Mbo',
  },
  {
    name: 'Matheus Freitas',
    role: 'Engenheiro de dados',
    company: 'Bradesco',
    text: 'Amanda é uma profissional sensacional, preocupada com cada detalhe e super ágil. Recomendo seus serviços',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQHwcrdH0zxIag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718219398445?e=1776297600&v=beta&t=fOXsOd8oSk3DL4bJedoBgsA066AEFW1OmKLrHVeBAiw',
  },
];

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const next = () => setCur((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCur((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    timer.current = setInterval(next, 6000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [cur]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.targetTouches[0].clientX; };
  const handleTouchMove = (e: React.TouchEvent) => { touchEnd.current = e.targetTouches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
  };

  const t = TESTIMONIALS[cur];

  return (
    <section
      id="depoimentos"
      className="py-24 px-7"
      style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-[680px] mx-auto">
        <Reveal>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] mb-5" style={{ color: 'var(--accent)' }}>
            Depoimentos
          </p>
          <h2 className="font-serif leading-[1.15] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--ink)' }}>
            Histórias reais de<br />transformação
          </h2>
          <p className="font-sans text-[13px] mb-12" style={{ color: 'var(--ink-muted)' }}>
            {TESTIMONIALS.length} profissionais atendidos com sucesso
          </p>
        </Reveal>

        {/* Card */}
        <div
          key={cur}
          className="animate-fade-up"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ minHeight: 220 }}
        >
          <p
            className="font-serif italic leading-[1.55] mb-8"
            style={{ fontSize: 'clamp(19px, 2.8vw, 24px)', color: 'var(--ink)' }}
          >
            "{t.text}"
          </p>

          <div className="flex items-center gap-3.5">
            <img
              src={t.photo}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="font-sans text-[14px] font-semibold" style={{ color: 'var(--ink)' }}>
                {t.name}
              </p>
              <p className="font-sans text-[12px]" style={{ color: 'var(--ink-muted)' }}>
                {t.role} · {t.company}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-10">
          {/* Dots */}
          <div className="flex gap-1 items-center">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                className="border-none cursor-pointer transition-all p-0"
                style={{
                  width: i === cur ? 20 : 5,
                  height: 5,
                  borderRadius: 3,
                  background: i === cur ? 'var(--accent)' : 'var(--border)',
                }}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter + arrows */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-[12px] tabular-nums" style={{ color: 'var(--ink-muted)' }}>
              {String(cur + 1).padStart(2, '0')}/{String(TESTIMONIALS.length).padStart(2, '0')}
            </span>
            <div className="flex gap-1.5">
              <button
                onClick={prev}
                className="w-[36px] h-[36px] rounded-full bg-transparent cursor-pointer text-[14px] flex items-center justify-center transition-colors"
                style={{ border: '1.5px solid var(--border)', color: 'var(--ink-light)' }}
                aria-label="Depoimento anterior"
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-[36px] h-[36px] rounded-full bg-transparent cursor-pointer text-[14px] flex items-center justify-center transition-colors"
                style={{ border: '1.5px solid var(--border)', color: 'var(--ink-light)' }}
                aria-label="Próximo depoimento"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}