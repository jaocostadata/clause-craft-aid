import { motion } from "framer-motion";
import { FileCheck, Settings2, FileOutput, Share2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gold line top */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="grid lg:grid-cols-5">
        {/* Left content */}
        <div className="lg:col-span-3 bg-navy px-6 md:px-12 lg:px-16 py-16 md:py-24 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="font-body text-navy-foreground text-base md:text-lg mb-4 leading-relaxed font-semibold">
              Advogado, a ferramenta que você sempre quis agora está no seu bolso e a dois cliques de distância de você.
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground leading-tight mb-6">
              Contratos prontos em minutos, com segurança de horas de escritório.
            </h1>
            <p className="font-body text-navy-foreground/70 text-base md:text-lg mb-8 leading-relaxed">
              A Contract.fy automatiza a criação de contratos para advogados, reduzindo erros, padronizando cláusulas e liberando seu tempo para o que realmente importa: atender seus clientes.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-10">
              {[
                { icon: FileCheck, text: "Modelos inteligentes atualizados" },
                { icon: Settings2, text: "Cláusulas personalizáveis em poucos cliques" },
                { icon: FileOutput, text: "Exportação profissional em PDF e Word" },
                { icon: Share2, text: "Compartilhe contratos direto pelo WhatsApp" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-navy-foreground/90 font-body text-sm md:text-base">
                  <item.icon className="text-gold shrink-0" size={20} />
                  {item.text}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#testar"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-cta text-cta-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
              >
                Testar grátis por 7 dias
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md border-2 border-gold text-gold font-body font-semibold text-base hover:bg-gold/10 transition-colors"
              >
                Ver demonstração
              </a>
            </div>
            <p className="mt-4 text-navy-foreground/50 font-body text-xs">
              Cancele quando quiser.
            </p>
          </motion.div>
        </div>

        {/* Right mockup */}
        <div className="lg:col-span-2 bg-light-gray flex items-center justify-center p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-md space-y-6"
          >
            {/* Laptop mockup */}
            <div className="bg-navy rounded-lg p-3 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cta" />
                <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                <div className="w-2.5 h-2.5 rounded-full bg-navy-foreground/30" />
              </div>
              <div className="bg-background rounded-sm p-4 space-y-3">
                <div className="h-3 w-3/4 bg-navy rounded" />
                <div className="h-2 w-full bg-navy/20 rounded" />
                <div className="h-2 w-5/6 bg-navy/20 rounded" />
                <div className="h-8 w-1/3 bg-cta rounded mt-4" />
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="h-12 bg-light-gray rounded border border-border" />
                  <div className="h-12 bg-light-gray rounded border border-border" />
                </div>
              </div>
            </div>
            {/* Phone mockup */}
            <div className="w-32 mx-auto bg-navy rounded-xl p-2 shadow-2xl">
              <div className="bg-background rounded-lg p-2 space-y-2">
                <div className="h-2 w-2/3 bg-navy rounded mx-auto" />
                <div className="h-1.5 w-full bg-navy/15 rounded" />
                <div className="h-1.5 w-4/5 bg-navy/15 rounded" />
                <div className="h-5 w-2/3 bg-cta rounded mx-auto mt-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold line bottom */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default HeroSection;
