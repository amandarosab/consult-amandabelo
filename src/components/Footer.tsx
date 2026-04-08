export default function Footer() {
  return (
    <footer className="px-7 py-6" style={{ background: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,.06)' }}>
      <div className="max-w-[1120px] mx-auto flex justify-between flex-wrap gap-2">
        <p className="font-sans text-[11px]" style={{ color: 'rgba(255,255,255,.2)' }}>
          © {new Date().getFullYear()} Amanda Belo. Todos os direitos reservados.
        </p>
        <p className="font-sans text-[11px]" style={{ color: 'rgba(255,255,255,.1)' }}>
          Desenvolvido por Los Coders
        </p>
      </div>
    </footer>
  );
}