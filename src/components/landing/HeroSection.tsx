import { motion } from "framer-motion";
import { FileCheck, Settings2, FileOutput, Share2 } from "lucide-react";
import heroMockup from "@/assets/hero-mockup-app.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">

      <div className="grid lg:grid-cols-5">
        {/* Left content */}
        <div className="lg:col-span-3 bg-navy px-6 md:px-12 lg:px-16 py-16 md:py-24 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="font-body text-navy-foreground/70 text-base md:text-lg mb-6 leading-relaxed">
              Advogado, a ferramenta que você sempre quis agora está no seu bolso e a dois cliques de distância de você.
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground leading-tight mb-8">
              Contratos prontos em minutos, com segurança de horas de escritório.
            </h1>

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

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#testar"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-cta text-cta-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
              >
                Testar grátis por 7 dias
              </a>
            </div>
            <p className="mt-4 text-navy-foreground/50 font-body text-xs">
              Cancele quando quiser.
            </p>
          </motion.div>
        </div>

        {/* Right mockup with animation */}
        <div className="lg:col-span-2 bg-light-gray flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md relative">
            {/* Notebook — lid opening animation */}
            <motion.div
              initial={{ opacity: 0, y: 60, rotateX: -40 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 60, damping: 18 }}
              style={{ perspective: 1200, transformOrigin: "bottom center" }}
            >
              <img
                src={heroMockup}
                alt="Contract.fy aplicação em notebook e celular"
                width={1024}
                height={768}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Phone overlay — rotates into view */}
            <motion.div
              initial={{ opacity: 0, x: 80, rotateY: 45, scale: 0.7 }}
              animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.8, type: "spring", stiffness: 50, damping: 16 }}
              className="absolute -bottom-4 -right-4 w-24 md:w-32 bg-navy rounded-xl shadow-2xl border-2 border-gold/30 overflow-hidden"
              style={{ perspective: 800 }}
            >
              <div className="w-full aspect-[9/16] bg-gradient-to-b from-navy via-navy to-background flex flex-col items-center justify-center p-2">
                <span className="font-display text-[8px] md:text-[10px] font-bold text-gold">Contract<span className="text-cta">.</span>fy</span>
                <div className="mt-1 w-3/4 h-[2px] bg-gold/30 rounded" />
                <div className="mt-1 w-1/2 h-[2px] bg-gold/20 rounded" />
                <div className="mt-1 w-2/3 h-[2px] bg-gold/15 rounded" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gold line bottom */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default HeroSection;
