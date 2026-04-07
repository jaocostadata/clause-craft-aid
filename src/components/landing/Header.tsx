import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Para quem?", href: "#para-quem" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo — scrolls to top */}
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2">
            <img src={logoSvg} alt="Contract.fy logo" className="h-8 w-8" />
            <span className="font-display text-xl md:text-2xl font-bold text-gold">
              Contract<span className="text-cta">.</span>fy
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-body font-medium text-navy-foreground/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Sign in / Sign up */}
          <div className="hidden lg:block">
            <a
              href="#testar"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-cta text-cta-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <LogIn size={16} />
              Sign in / Sign up
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-navy-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy border-t border-gold/20 px-4 pb-4">
            <nav className="flex flex-col gap-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-body text-navy-foreground/80 hover:text-gold py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#testar"
                className="mt-2 w-full text-center py-3 rounded-md bg-cta text-cta-foreground font-body font-semibold text-sm flex items-center justify-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <LogIn size={16} />
                Sign in / Sign up
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
