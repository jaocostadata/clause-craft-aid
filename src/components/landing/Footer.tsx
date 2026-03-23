const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display text-xl font-bold text-gold">
            Contract<span className="text-cta">.</span>fy
          </span>
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} Contract.fy. Todos os direitos reservados.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {["Termos de Uso", "Política de Privacidade", "Contato"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-xs text-background/60 hover:text-gold transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <p className="font-body text-xs text-background/40">
          contato@contractfy.com.br
        </p>
      </div>
    </footer>
  );
};

export default Footer;
