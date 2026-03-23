import { motion } from "framer-motion";
import { FileCheck, Settings2, FileOutput } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

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
              Sem cartão de crédito. Cancele quando quiser.
            </p>
          </motion.div>
        </div>

        {/* Right mockup */}
        <div className="lg:col-span-2 bg-light-gray flex items-center justify-center p-8 md:p-12">
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            src={heroMockup}
            alt="Contract.fy - Interface do aplicativo de geração de contratos"
            className="w-full max-w-md"
            width={800}
            height={600}
          />
        </div>
      </div>

      {/* Gold line bottom */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default HeroSection;
